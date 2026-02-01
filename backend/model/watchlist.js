import mongoose from "mongoose"
const watchlist_Schema=new mongoose.Schema({
    name: {type :String},
    price:{type:Number},
    percent:{type:String},
    isDown: {type:Boolean},
});
const watchlist =mongoose.model("watchlist" ,watchlist_Schema);
export default watchlist;




