import * as z from "zod";

const passwordSchema = z
  .string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  })
  .min(8, { message: "Password must be at least 8 characters" })
  .regex(/[a-z]+/, {
    message: "Password must contain at least one lowercase letter",
  })
  .max(100)
  .regex(/[A-Z]+/, {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(/[0-9]+/, { message: "Password must contain at least one number" })
  .regex(/[^a-zA-Z0-9]+/, {
    message: "Password must contain at least one special character",
  });

const emailSchema = z
  .string()
  .email({ message: "Please enter a valid email address" });

const authSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

const loginSchema = z.object({
  email: authSchema.shape.email,
  password: z.string(),
});

const registerSchema = authSchema.extend({
  username: z.string(),
  name: z
    .string({ required_error: "name is required" })
    .min(2, { message: "Name must have more than 2 character" }),
});

const forgotPasswordSchema = z.object({ email: authSchema.shape.email });
const resetPassword = z.object({password: passwordSchema });

export { registerSchema, loginSchema,forgotPasswordSchema,resetPassword };
