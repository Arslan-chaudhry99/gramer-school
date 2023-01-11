const jwt = require("jsonwebtoken");
const User = require("../Model/usersSchema");
const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.userToken;
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    if (!verify) {
      return res.status(400).json({ error: "Anounmous User" });
    }
    if (verify) {
      next()

    }

  } catch (error) {
    return res.status(400).json({ error: "Anounmous User" });
    console.log(error);
  }
};

module.exports = Authenticate;
