const express = require("express");
const Authenticate = require("../middleware/Authenticate")
const router = express.Router();
require("../db/conn");
const Admission = require("../Model/Admission");

// to store admission for
router.post("/admit", async (req, res) => {
     const { name, motherName, cnic, status, fatherName, phone, fee, address, dateBirth, classname, rollNumber, education, currentStatus } = req.body;
     console.log(req.body);
     try {
          const userPresent = await Admission.findOne({ cnic: cnic });
          if (userPresent) {
               return res.status(201).json({ success: "already" });
          }
          else {
               const user = new Admission({ name, motherName, cnic, status, fatherName, phone, fee, address, dateBirth, classname, rollNumber, education, currentStatus });
               const generateRollNumber = await Admission.find({ rollNumber: rollNumber });

               if (status === "Student") {
                    if (generateRollNumber.length !== 0) {
                         return res.status(401).json({ success: "Roll Number Not Available try an other." });
                    }
                    else {
                         const registerUser = await user.save();
                         if (registerUser) {
                              return res.status(200).json({ success: "success" });
                         }
                    }

               }

               if (status === "Teacher") {
                    const registerUser = await user.save();
                    if (registerUser) {
                         return res.status(200).json({ success: "success" });
                    }
               }

          }




     } catch (error) {
          console.log(error);
     }

});
// to get school data
router.get("/getschool", async (req, res) => {
     try {
          let data = await Admission.find()
          res.status(200).json(data);
     } catch (error) {
          console.log(error);
     }
})
// enable or disable
router.post("/enableDisable", async (req, res) => {
     const { id } = req.body
     try {
          const candidatePri = await Admission.findOne({ _id: id })
          const candidate = await Admission.findByIdAndUpdate({ _id: id }, {
               $set: {
                    currentStatus: candidatePri.currentStatus === true ? false : true,
                    rollNumber: 0,
                    classname: 0
               }
          }, { new: true })
          if (candidate) {
               return res.status(201).json({ success: "updated successfuly." })
          }
          if (!candidate) {
               return res.status(403).json({ error: "Unable to Updated " })
          }



     } catch (error) {
          return res.status(400).json({ error: "Please try again later." })
     }
})
router.post("/disableCandidate", async (req, res) => {
     const { CandidateId } = req.body
     try {
          const candidatePri = await Admission.findOne({ _id: CandidateId })

          if (candidatePri) {
               return res.status(200).json(candidatePri)
          }
          if (!candidatePri) {
               return res.status(401).json({ error: "" })
          }



     } catch (error) {
          return res.status(400).json({ error: "Please try again later." })
     }
})

// update admission form
router.post("/UpdateDataBaseData", async (req, res) => {
     const { candidateId, nameIng, inputValue } = req.body;
     if (!candidateId || !nameIng || !inputValue) {
          return res.status(400).json({ error: "Bad request try again later." })
     }
     else {
          try {

               const candidate = await Admission.findByIdAndUpdate({ _id: candidateId },
                    {
                         $set: {
                              nameIng: inputValue
                         }
                    }, { new: true }
               )
               console.log(candidateId);

          } catch (error) {
               console.log(error);
          }
     }

})
// , {
//      $set: {
//           currentStatus: candidatePri.currentStatus === true ? false : true,
//           rollNumber: 0,
//           classname: 0
//      }
// }, { new: true }
module.exports = router;