const express = require("express");
const router = express.Router();
require("../db/conn");
const Fee = require("../Model/GeneratingFees");
const Admission = require("../Model/Admission");
const cron = require("node-cron");

const createNewFees = async () => {
           const Candidates = await Admission.find()
           const creatingData = async (modlValues) => {
                      const adding = await modlValues.save()
                      if (adding) {
                                 console.log("creation successful");
                      }
           }
           Candidates.map((item, index) => {
                      if (item.currentStatus === true) {
                                 const startingDate = new Date().toDateString()
                                 const currentYear = new Date().getFullYear().toString()
                                 const candidateId = item._id;
                                 const payableAmoun = item.fee
                                 const remaning = item.fee
                                 const rollNumber = item.rollNumber
                                 const cnic = item.cnic
                                 const classname = item.classname
                                 const endDate = ""
                                 const name = item.name
                                 const fname = item.fatherName
                                 const motherName = item.motherName
                                 const status = item.status
                                 const candiFees = new Fee({
                                            startingDate, currentYear, candidateId, payableAmoun, rollNumber, cnic, classname, remaning, endDate, name, fname, motherName, status
                                 })
                                 creatingData(candiFees)

                      }
                      else {
                                 null
                      }
           })
}


module.exports = createNewFees



