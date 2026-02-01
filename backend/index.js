import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import holdings from "./model/holdings.js"
import positions from "./model/positions.js"
import cors from "cors"
dotenv.config();

const main=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected");
    }
    catch(err){
        console.log("DB not connected ");
    }
}
main();
const PORT = process.env.PORT || 3002;
const app=express();
app.use(cors());

app.listen(PORT,()=>{
    console.log("app started");
})
app.get("/allHoldings", async(req,res,next)=>{
    const data =await holdings.find({});
    res.json(data);
})
app.get("/allPositions",async (req,res,next)=>{
    const data =await positions.find({});
    res.json(data);
})