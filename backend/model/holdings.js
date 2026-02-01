import mongoose from "mongoose"

const holdings_Schema=new mongoose.Schema({
    name:{type:String},
    qty:{type:Number},
    avg:{type:Number},
    price:{type:Number},
    net:{type:String},
    day:{type:String},
    isLoss:{type:Boolean},
})
const holdings =mongoose.model("holdings",holdings_Schema);
export default holdings;