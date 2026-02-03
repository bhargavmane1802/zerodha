import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import holdings from "./model/holdings.js"
import positions from "./model/positions.js"
import cors from "cors"
import order from "./model/order.js"
import watchlist from "./model/watchlist.js"
dotenv.config();

const main=async ()=>{
    try{
        console.log("db connecting");
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
app.use(express.json());

app.listen(PORT,()=>{
    console.log("app started");
})

const wrap=(fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch(next);
    }
}

app.get("/allHoldings", wrap(async(req,res,next)=>{
    const data =await holdings.find({});
    let totalvalue=0;
    for(let e of data){
        const curr = await watchlist.findOne({name:e.name});
        if(curr){
            totalvalue+=(curr.price*e.qty);
        }
    }
    res.json({data:data,return:totalvalue});
}))
app.get("/allPositions",wrap(async (req,res,next)=>{
    const data =await positions.find({});
    res.json(data);
}))
app.post("/buyorder",wrap(async(req,res,next)=>{
    const data =req.body;
    console.log(data);
    const new_order=new order(data);
    await new_order.save();
    console.log("order save");
    res.status(201).json({
        status: "success",
        message: "Order placed successfully",
        orderId: new_order._id
    });
}))
app.get("/order/:id",wrap(async(req,res,next)=>{
    const watchlist_data= await watchlist.find({name:req.params.id});
    res.json(watchlist_data);
}))
app.use((err,req,res,next)=>{
    console.log("failed");
    res.redirect("/apps");
});
