import bcrypt from 'bcryptjs'
import { User } from "../models/user.model.js"
import { encodeAuthToken } from '../lib/authToken.js'

const register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
      res.status(401).send("Missing fields !");
    }

    //check user already exist or not
    const isExist = await User.findOne({
      $or: [{ email }, { username }]
    })
    if (isExist) return res.status(409).send('User already exists')

    //password hashed
    const secPassword = await bcrypt.hash(password, 10);

    //create new user
    let user = await User.create({
      name,
      username,
      email,
      password: secPassword
    });

    user = await User.findById(user._id).select("-password")

    //generate auth token
    const token = encodeAuthToken(user._id, email);

    //set auth  token to cookie and send response with user data
    res.cookie('authToken', token, {
      httpOnly: true,
      maxAge: 3600,
      sameSite: 'lax',
      secure: true
    }).status(200).send(user);

  } catch (error) {
    res.status(400).send("Error while creating an account!")
  }
}

export { register };
