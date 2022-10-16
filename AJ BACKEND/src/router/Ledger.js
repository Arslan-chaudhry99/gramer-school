const express = require("express");
const router = express.Router();
require("../db/conn");
const Ledger = require("../Model/Ledger");
router.post("/registerLedger", async (req, res) => {
  
  const { name, className, rollNumber, amount, details, remaning, date } = req.body;
  try {
    const user = new Ledger({ name, className, rollNumber, amount, details, remaning: amount, date });
    const registerLedgerReq = await user.save();
    if (registerLedgerReq) {
      res.send("success")
      return res.status(200).json({ error: "Done" });
    }
    console.log(registerLedgerReq);
  } catch (error) {
    () => res.status(500).json({ error: "Unable to create new ledger.Please try again or contact with Arslan chaudhry" });
  }
});

router.get("/getledger", async (req, res) => {
  try {
    let data = await Ledger.find()
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }

})
// payment
router.post("/paymentRequest", async (req, res) => {
  const { payAmount, ledger ,date} = req.body;
  let data = await Ledger.findByIdAndUpdate({ _id: ledger })
  if (data.remaning === 0) {
    return res.status(401).json({ error: "no remins" })
  }
  if (payAmount - data.remaning !== 0 || data.remaning > 0) {

    let resUpdate = await Ledger.findByIdAndUpdate({ _id: ledger }, {
      $set: {
        remaning: data.remaning - payAmount,
        endDate:date
      }
    })

    return res.status(201).json({ success: "Done" })


  }

})
// delete riquest
router.post("/deleteLedger", async (req, res) => {
  try {
    const { item } = req.body;
    const deletRes = await Ledger.findByIdAndDelete({ _id: item })
    if (deletRes) {
      return res.status(200).json({ success: "success" })
    }
  } catch (error) {
    return res.status(500).json({ error: "server error" })
  }

})
module.exports = router;