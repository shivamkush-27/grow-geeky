import express from "express";
import { register } from "../services/register.services.js";
import { login } from "../services/login.services.js";
import { forgotPassword, ResetPassword } from "../services/forgot-password.services.js";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.post("/session", register);
authRouter.post("/forgot-password", forgotPassword);
authRouter.patch("/reset-password/:token", ResetPassword);

export { authRouter };
