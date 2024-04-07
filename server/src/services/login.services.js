/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const login = async (req, res) => {
  res.status(200).send("hi ");
};

export { login };
