const express = require("express");
const router = express.Router();
require("../db/conn");
const Admission = require("../Model/Admission");

router.get("/user", (req, res) => {
           res.send("welcome")
})
router.post("/admit", async (req, res) => {

           const { name, motherName, cnic, status, fatherName, phone, fee, address, dateBirth } = req.body;

           try {
                      const userPresent = await Admission.findOne({ cnic: cnic });
                      if (userPresent) {
                                 return res.status(201).json({ success: "already" });
                      }
                      else {
                                 const user = new Admission({ name, motherName, cnic, status, fatherName, phone, fee, address, dateBirth });

                                 const registerUser = await user.save();
                                 if (registerUser) {
                                            return res.status(200).json({ success: "success" });
                                 }
                      }




           } catch (error) {
                      console.log(error);
           }

});



module.exports = router;