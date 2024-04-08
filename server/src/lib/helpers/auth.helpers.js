import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
/**
 * @typedef {Object} AuthJwtPayload
 * @property {string} userId
 * @property {string} email
 */

/**
 * @typedef {Object} AuthJwtPayloadResponse
 * @property {number} iat
 * @property {number} exp
 * @property {string} userId
 * @property {string} email
 */

/**
 * @param {AuthJwtPayload} payload
 * @returns {string}
 */
const encodeAuthToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

/**
 * @param {String} token
 * @returns {AuthJwtPayloadResponse | null}
 */
const decodeAuthToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    throw error;
  }
};



/**
 
 * @param {string} plainPassword 
 * @param {string} hashedPassword 
 * @returns {Promise<boolean>} 
 */
const comparePasswords = async (plainPassword, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    throw error; 
  }
};

export { encodeAuthToken, decodeAuthToken, comparePasswords };
