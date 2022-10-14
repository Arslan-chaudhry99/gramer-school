const express = require("express");
const router = express.Router();
require("../db/conn");
const Ledger = require("../Model/Ledger");
router.post("/registerLedger", async (req, res) => {
  const { name, className, rollNumber, amount, details ,remaning} = req.body;
  try {
    const user = new Ledger({ name, className, rollNumber, amount, details ,remaning});
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
module.exports = router;