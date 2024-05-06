import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import {
  resetPassword,
  forgotPasswordSchema,
} from "../validations/auth.validations.js";
import {
  NotFoundUser,
  BadRequest,
  InvalidCredentialsError,
} from "../exceptions/auth.exceptions.js";
import {
  encodeAuthToken,
  decodeAuthToken,
} from "../lib/helpers/auth.helpers.js";
import { ZodError } from "zod";

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */

const forgotPassword = async (req, res, next) => {
  try {
    const { email } = forgotPasswordSchema.parse(req.body);
    let user = await User.findOne({ email });
    if (!user) return next(new NotFoundUser());
    const token = encodeAuthToken(
      { userId: user._id, email: user.email },
      "15m"
    );
    const Link = `http://localhost:8080/api/auth/reset-password/${token}`; //TODO : Send link using email

    //link sending section

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODE_MAILER_USERNAME,
        pass: process.env.NODE_MAILER_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.PRODUCTION_EMAIL,
      to: email,
      subject: "Password Reset Link for Your Account\n",
      text: `We have received a request to reset the password for your account associated with Grow Geeky. To proceed with resetting your password, please click on the link below:\n\n\n

      ${Link}`,
    };

    await transporter.sendMail(mailOptions);

    console.log(Link);
    return res.status(200).send("Reset password link send successfully !");
  } catch (error) {
    if (error instanceof ZodError) {
      return next(new ZodValidationError(error));
    } else {
      return next(error);
    }
  }
};

const ResetPassword = async (req, res, next) => {
  try {
    const { token } = req.params;
    const { password } = resetPassword.parse(req.body);
    const { userId, email } = decodeAuthToken(token);
    let user = await User.findById(userId);
    if (!user) return next(new NotFoundUser());

    
    const secPassword = await bcrypt.hash(password, 10);
    user = await User.findByIdAndUpdate(userId, {
      password: secPassword,
    }).select("-password");
    const Usertoken = encodeAuthToken({ userId: user._id, email: user.email });

    res
      .status(200)
      .cookie("authToken", Usertoken, {
        httpOnly: true,
        maxAge: 3600,
        sameSite: "lax",
        secure: true,
      })
      .send(user);
  } catch (error) {
    if (error instanceof ZodError) {
      return next(new ZodValidationError(error));
    } else {
      return next(error);
    }
  }
};

export { forgotPassword, ResetPassword };
