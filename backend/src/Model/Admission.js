const mongoose = require("mongoose");
const admissionSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    motherName: {
        type: String,
        require: true
    },
    cnic: {
        type: Number,
        require: true
    },
    status: {
        type: String,
        require: true
    }
    ,
    fatherName: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    fee: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    dateBirth: {
        type: String,
        require: true
    },
    classname: {
        type: Number,
        require: true
    },
    rollNumber: {
        type: Number,
        require: true
    },
    education: {
        type: String,
        require: true
    },
    currentStatus: {
        type: Boolean,
        require: true

    },
    reqFiles: {
        type: Array,
        require: true,
    },

})

const Admission = mongoose.model("Admission", admissionSchema);
module.exports = Admission