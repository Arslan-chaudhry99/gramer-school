const express = require("express");
const router = express.Router();
require("../db/conn");
const Fee = require("../Model/GeneratingFees")
router.get(("/getCandidateData"), async (req, res) => {
           const getFees = await Fee.find()
           if (getFees) {
                      return res.status(200).json(getFees);
           }
           return res.status(501).json({ error: "Eror 501" });

})

module.exports = router