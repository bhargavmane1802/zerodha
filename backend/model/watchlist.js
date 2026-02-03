import mongoose from "mongoose"
const watchlist_Schema=new mongoose.Schema({
    name: {type :String},
    qty:{type:Number},
    price:{type: Number },
    mode: {type:Boolean},
});
const watchlist =mongoose.model("watchlist" ,watchlist_Schema);
export default watchlist;




