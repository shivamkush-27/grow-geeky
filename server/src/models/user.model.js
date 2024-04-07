import mongoose from "mongoose";
import { names } from "../data/names.js";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: function () {
        const isFemale = names.some((n) => n.name.toLowerCase().includes(this.name.toLowerCase()) && n.gender === "female");
        const gender = isFemale ? "female" : "male";
        return `https://d2u8k2ocievbld.cloudfront.net/memojis/${gender}/${Math.floor(Math.random() * 30) + 1}.png`;
      },
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    roles: {
      type: [
        {
          type: String,
          enum: ["ADMIN", "USER", "MODERATOR"],
        },
      ],
      default: ["USER"],
    },
    permissions: {
      type: Map,
      of: Boolean,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export { User };
