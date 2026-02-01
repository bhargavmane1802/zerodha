import mongoose from "mongoose"

const positions_Schema=new mongoose.Schema({
    product:{type:String},
    name:{type:String},
    qty:{type:Number},
    avg:{type:Number},
    price:{type:Number},
    net:{type:String},
    day:{type:String},
    isLoss:{typr:Boolean},
})
const positions =mongoose.model("positions" ,positions_Schema);
export default positions;