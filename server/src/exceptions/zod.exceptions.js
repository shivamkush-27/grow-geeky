import { ErrorCodes, HttpException } from "./root.js"

class ZodValidationError extends HttpException {
  constructor(errors) {
    const formattedErrors = errors.errors.map((err) => ({
      field: err.path.join("."),
      message: err.message,
    }));

    super(400, ErrorCodes.VALIDATION_ERROR, "Validation error", formattedErrors);
  }
}

export { ZodValidationError };
