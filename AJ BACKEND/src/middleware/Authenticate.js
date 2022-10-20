const jwt = require("jsonwebtoken");
const User = require("../Model/usersSchema");
const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.userToken;
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    if (!verify) {
      
    }
    next()
  } catch (error) {
    res.status(401).send("Anounmous");
    console.log(error);
  }
};

module.exports = Authenticate;
