const express = require("express");
const router = express.Router();
require("../db/conn");
const Ledger = require("../Model/Ledger");
router.post("/registerLedger", async (req, res) => {
  const { name, className, rollNumber, amount, details, remaning } = req.body;
  try {
    const user = new Ledger({ name, className, rollNumber, amount, details, remaning:amount });
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
  const { payAmount, ledger } = req.body;
  let data = await Ledger.findByIdAndUpdate({ _id: ledger })
  if (data.remaning===0) {
  
    return res.status(402).json({ error: "Your enter amout is greate than you payable amount" })

  }
  if (payAmount > data.remaning) {
    console.log(payAmount - data.amount);
    return res.status(401).json({ error: "Your enter amout is greate than you payable amount" })

  }
  
  if (data.remaning === 0) {
    let resUpdate = await Ledger.findByIdAndUpdate({ _id: ledger }, {
      $set: {
        amount: 0,
        payedOrNot:true,
        remaning:0
      }
    })
    if (resUpdate) {
      return res.status(200).json({ error: "complete payment done" })
    }
    console.log("complete payment done");
  }
  if (payAmount - data.amount !== 0 || payAmount - data.amount> 0) {
    let resUpdate = await Ledger.findByIdAndUpdate({ _id: ledger }, {
      $set: {
        amount:data.amount ,
        remaning: data.remaning-payAmount 
       
      }
    })
    if (resUpdate) {
      return res.status(201).json({ error: "Payment done some remains" })
    }
  }

})
module.exports = router;