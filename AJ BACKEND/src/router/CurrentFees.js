const express = require("express");
const router = express.Router();
require("../db/conn");
const Authentication = require("../middleware/Authenticate")
const Fee = require("../Model/GeneratingFees")
router.get(("/getCandidateData"), async (req, res) => {
           const getFees = await Fee.find()
           if (getFees) {
                      return res.status(200).json(getFees);
           }
           return res.status(501).json({ error: "Eror 501" });

})
router.post("/paynowfee", async (req, res) => {
           const { PaymentAmount, PaymentDate, candidateid } = req.body
           try {
                      const candidateModifying = await Fee.findByIdAndUpdate({ _id: candidateid })
                      const candidateModifyingNow = await Fee.findByIdAndUpdate({ _id: candidateid }, {
                                 $set: {
                                            remaning: candidateModifying.remaning - PaymentAmount,
                                            endDate: PaymentDate
                                 }
                      })
                      if (candidateModifyingNow) {
                                 return res.status(200).json({ success: "done!" });
                      }
           } catch (error) {
                      return res.status(500).json({ error: '500 error' });
           }



})
module.exports = router