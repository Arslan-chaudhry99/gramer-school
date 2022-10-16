const express = require("express");
const router = express.Router();
require("../db/conn");
const Admission = require("../Model/Admission");

router.post("/admit", async (req, res) => {

           const { name, motherName, cnic, status, fatherName, phone, fee, address, dateBirth,classname,rollNumber,education,currentStatus} = req.body;

           try {
                      const userPresent = await Admission.findOne({ cnic: cnic });
                      if (userPresent) {
                                 return res.status(201).json({ success: "already" });
                      }
                      else {
                                 const user = new Admission({ name, motherName, cnic, status, fatherName, phone, fee, address, dateBirth ,classname,rollNumber,education,currentStatus});

                                 const registerUser = await user.save();
                                 if (registerUser) {
                                            return res.status(200).json({ success: "success" });
                                 }
                      }




           } catch (error) {
                      console.log(error);
           }

});

router.get("/getschool", async (req, res) => {
           try {
           let data = await Admission.find()
           res.status(200).json(data);
           } catch (error) {
                      console.log(error);
           }
})


module.exports = router;