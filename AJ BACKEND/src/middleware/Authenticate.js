const jwt = require("jsonwebtoken");
const User = require("../Model/usersSchema");
const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    const rooteUser=await User.find({_id:verify._id, "tokens:token":token});
    if (!rooteUser) {
           throw new Error("user not found")
    }
    req.token=token
    req.rooteUser=rooteUser
    next()
  } catch (error) {
    res.status(401).send("Anounmous");
    console.log(error);
  }
};

module.exports = Authenticate;
