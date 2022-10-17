const mongoose=require("mongoose");
const feeSchema=new mongoose.Schema({
           startingDate:{
                      type:String,
                      require:true
           },
           currentYear:{
                      type:String,
                      require:true     
           },
           candidateId:{
                      type:String,
                      require:true     
           },
           payableAmoun:{
                      type:Number,
                      require:true   
           },
           rollNumber:{
                      type:Number,
                      require:true
           },
           cnic:{
                      type:Number,
                      require:true
           },
           classname:{
                      type:Number,
                      require:true
           },
           feeStatus:{
                      type:String,
                      require:true
           }
})

const Fee=mongoose.model("Fee",feeSchema);
module.exports=Fee