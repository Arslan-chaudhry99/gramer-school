const mongoose = require("mongoose");

const ledgerSchema = new mongoose.Schema({
           name: {
                      type: String,
                      require: true
           },
           class: {
                      type: Number,
                      require: true
           },
           rollNumber: {
                      type: Number,
                      require: true
           },
           amount: {
                      type: Number,
                      require: true
           }
           ,
           details: {
                      type: String,
                      require: true
           }
})

const Ledger = mongoose.model("Ledger", ledgerSchema);
module.exports = Ledger