import mongoose from "mongoose"
const order_Schema=new mongoose.Schema({
    name: {type :String},
    qty:{type:Number},
    price:{type: Number },
    mode: {type:String},
});
const order =mongoose.model("order" ,order_Schema);
export default order;




