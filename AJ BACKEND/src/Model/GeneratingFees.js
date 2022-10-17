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
           
           remaning:{
                      type:Number,
                      require:true
           },
           endDate:{
                  type:String,
                  require:true    
           },
           name:{
              type:String,
              require:true
           },
           fname:{
              type:String,
              require:true
           },
           motherName:{
              type:String,
              require:true
           },
           status:{
              type:String,
              require:true
           }

})

const Fee=mongoose.model("Fee",feeSchema);
module.exports=Fee