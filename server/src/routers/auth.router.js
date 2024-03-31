const express = require("express");
const { login } = require("../services/auth.services");

const authRouter = express.Router();

authRouter.get("/login", login);

export default authRouter;
