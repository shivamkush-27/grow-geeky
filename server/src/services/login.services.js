import { User } from '../models/user.model.js';
import { loginSchema } from "../validations/auth.validations.js";
import { NotFoundUser, BadRequest, InvalidCredentialsError } from '../exceptions/auth.exceptions.js'
import { encodeAuthToken, comparePasswords } from "../lib/helpers/auth.helpers.js";
import { ZodError } from "zod";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */


const login = async (req, res, next) => {
  const { email, password } = loginSchema.parse(req.body);
  try {
    if (!email || !password)
      return next(new BadRequest("Email Or Password Is Required"));
    
    let user = await User.findOne({ email });
    if (!user) return next(new NotFoundUser());

    const validPassword = await comparePasswords(password, user.password);
    if (!validPassword) return next(new InvalidCredentialsError());

    const token = encodeAuthToken({ userId: user._id, email: user.email });

    user = await User.findById(user._id).select("-password");

    return res
      .cookie("authToken", token, {
        httpOnly: true,
        maxAge: 3600,
        sameSite: "lax",
        secure: true,
      })
      .status(200)
      .send(user);
  } catch (error) {
    if (error instanceof ZodError) {
      return next(new ZodValidationError(error));
    } else {
      return next(error);
    }
  }

};

export { login };
