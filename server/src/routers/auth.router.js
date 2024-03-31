import express from "express";
import { register } from "../services/register.services.js";
import { login } from "../services/login.services.js";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/register", register);

export { authRouter };
