import { HttpException, ErrorCodes } from "./root.js";

class Unauthorized extends HttpException {
  constructor() {
    super(401, ErrorCodes.UNAUTHORIZED, "Unauthorized", undefined);
  }
}

class Forbidden extends HttpException {
  constructor() {
    super(403, ErrorCodes.FORBIDDEN, "Forbidden", undefined);
  }
}

class Conflict extends HttpException {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(409, ErrorCodes.USER_ALREADY_EXISTS, message, undefined);
  }
}

class NotFoundUser extends HttpException {
  constructor() {
    super(404, ErrorCodes.USER_NOT_FOUND, "User not found", undefined);
  }
}

class InvalidCredentialsError extends HttpException {
  constructor() {
    super(401, ErrorCodes.INCORRECT_PASSWORD, "Invalid email or password", undefined);
  }
}

class InvalidTokenError extends HttpException {
  constructor() {
    super(401, ErrorCodes.INVALID_TOKEN, "Invalid token provided", undefined);
  }
}

class TokenExpired extends HttpException {
  constructor() {
    super(403, ErrorCodes.TOKEN_EXPIRED, "Token expired", undefined);
  }
}

class TokenBlacklistedError extends HttpException {
  constructor() {
    super(403, ErrorCodes.TOKEN_BLACKLISTED, "Token has been blacklisted", undefined);
  }
}


class BadRequest extends HttpException {
  constructor(message) {
    super(400, ErrorCodes.BAD_REQUEST, message || "Bad request", undefined);
  }
}

export { Unauthorized, Forbidden, Conflict, NotFoundUser, InvalidCredentialsError, InvalidTokenError, TokenExpired, TokenBlacklistedError, BadRequest };
