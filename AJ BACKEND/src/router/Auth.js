const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../Model/usersSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/Authenticate")

// registration
router.post("/signup", async (req, res) => {
  const { name, phone, password, cpassword } = req.body;
  try {
    const userPresent = await User.findOne({ name: name });
    if (userPresent) {
      return res.status(422).json({ error: "Try another username" });
    }
    const user = new User({ name, phone, password, cpassword });
    const registerUser = await user.save();
    if (registerUser) {
      res.send("success")
      return res.status(201).json({ success: "register sucessfuly" });
    } else {
      return res.status(500).json({ faild: "unable to regi error 500" });
    }
  } catch (error) {
    () => res.status(500).json({ success: "not possible" });
  }
});
// signin
router.post("/signin", async (req, res) => {
  const { name, password } = req.body;
  try {
    const loginNow = await User.findOne({ name: name });
    if (loginNow) {
      const isMatch = await bcrypt.compare(password, loginNow.password);
      if (!isMatch) {
        return res.status(422).json({ error: "invalid password" });
      } else {
        const token = await loginNow.generateAuthToken();
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 100000000000000),
          httpOnly: true,
        });
        return res.status(201).json({ success: "login successfully" });
      }
    }
    else {
      return res.status(404).json({ error: "User not found" })
    }
  } catch (error) {
    () => res.status(500).json({ error: " Login failed" });
  }
});
// reset password
router.post("/resetpassword", async (req, res) => {
  const { name, oldPass, newPass, cnewPass } = req.body;

  const findUser = await User.findOne({ name: name })
  if (!findUser) {
    return res.status(401).json({ error: "User Not found.Please enter a correct username." });
  }
  else {
    const isMatch = await bcrypt.compare(oldPass, findUser.password);
    if (!isMatch) {
      return res.status(402).json({ error: "Invalid old password" });
    }
    else {
      let hashedPass = await bcrypt.hash(newPass, 12);
      let cHashedPass = await bcrypt.hash(cnewPass, 12);
      let _id = await findUser.id
      let resFromServer = await User.findByIdAndUpdate({ _id }, {
        $set: {
          password: hashedPass,
          cpassword: cHashedPass
        }
      })
      return res.status(203).json({ error: "Password updated" });
    }
  }
});

router.get("/setting", (req, res) => {
  console.log(req);
  res.send("This is setting page");
})

module.exports = router;
