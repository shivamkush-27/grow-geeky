import bcrypt from "bcryptjs";
import { User } from "../models/user.model.js";
import { encodeAuthToken } from "../lib/helpers/auth.helpers.js";
import { registerSchema } from "../validations/auth.validations.js";
import { ZodError } from "zod";
import { ZodValidationError } from "../exceptions/zod.exceptions.js";
import { Conflict } from "../exceptions/auth.exceptions.js";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const register = async (req, res, next) => {
  try {
    const { email, name, password, username } = registerSchema.parse(req.body);
    //check user already exist or not
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) return next(new Conflict("User already exists"));

    //password hashed
    const secPassword = await bcrypt.hash(password, 10);
    //create new user
    let user = await User.create({
      name,
      username,
      email,
      password: secPassword,
    });

    user = await User.findById(user._id).select("-password");

    //generate auth token
    const token = encodeAuthToken({ userId: user.id, email: user.email });

    //set auth  token to cookie and send response with user data
    res
      .cookie("authToken", token, {
        httpOnly: true,
        maxAge: 3600,
        sameSite: "lax",
        secure: true,
      })
      .status(200)
      .send(user);
  } catch (err) {
    if (err instanceof ZodError) {
      return next(new ZodValidationError(err));
    } else {
      console.error(err);
      return next(err);
    }
  }
};

export { register };
