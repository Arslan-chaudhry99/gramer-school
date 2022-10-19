const express = require("express");
const router = express.Router();
require("../db/conn");
const Admission = require("../Model/Admission");


router.post("/admit", async (req, res) => {

           const { name, motherName, cnic, status, fatherName, phone, fee, address, dateBirth, classname, rollNumber, education, currentStatus } = req.body;
           const generateRollNumber = await Admission.find({ rollNumber: rollNumber });

           try {
                      const userPresent = await Admission.findOne({ cnic: cnic });
                      if (userPresent) {
                                 return res.status(201).json({ success: "already" });
                      }
                      else {
                                 const user = new Admission({ name, motherName, cnic, status, fatherName, phone, fee, address, dateBirth, classname, rollNumber, education, currentStatus });
                                 if (generateRollNumber[0].status === "Teacher") {
                                            const registerUser = await user.save();
                                            if (registerUser) {
                                                       return res.status(200).json({ success: "success" });
                                            }
                                 }
                                 if (generateRollNumber.length !== 0) {
                                            return res.status(401).json({ success: "Roll Number Not Available try an other." });
                                 }
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

router.post("/enableOrDisable", async (req, res) => {
           const { CandidateId } = req.body
           try {
                      let data = await Admission.findById({ _id: CandidateId })

                      if (data) {
                                 return res.status(200).json(data);
                      }
                      if (!data) {
                                 return res.status(401).json({ error: "user not found" });
                      }
           } catch (error) {
                      return res.status(401).json({ error: "user not found" });
           }




})

router.post("/enableDisable", async (req, res) => {
           const { id } = req.body
           try {
                      const candidatePri = await Admission.findOne({ _id: id })
                      const candidate = await Admission.findByIdAndUpdate({ _id: id }, {
                                 $set: {
                                 currentStatus: candidatePri.currentStatus === true ? false : true,
                                 rollNumber:0,
                                 classname:0
                                 }
                      }, { new: true })
                      if (candidate) {
                           return res.status(201).json({success:"updated successfuly."})      
                      }
                      if (!candidate) {
                           return res.status(403).json({error:"Unable to Updated "})      
                      }



           } catch (error) {
                      return res.status(400).json({ error: "Please try again later." })
           }
})

module.exports = router;