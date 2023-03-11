const express =require("express");
const courseRouter=require("./routes/courses")
require("dotenv").config();
const app=express();

app.use("/api/v1/courses",courseRouter )

// app.get("/",(req,res)=>{
//     res.send("Hey! This is Manish Prakash")
// });

app.listen(2000,()=>{
    console.log("Server is running...")
} )
