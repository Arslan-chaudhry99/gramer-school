const mongoose = require("mongoose");

const ledgerSchema = new mongoose.Schema({
           name: {
                      type: String,
                      require: true
           },
           className: {
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
           ,
           remaning: {
                      type: Number,
                      require: true
           },
           date: {
                      type: String,
                      require: true,


           },
           endDate: {
                      type: String,
                      require:false
           }

})

const Ledger = mongoose.model("Ledger", ledgerSchema);
module.exports = Ledger