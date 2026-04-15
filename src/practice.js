const express=require("express");
const app=express();
app.use("/abc"
    ,(req,res,next)=>{
    console.log("res1 send")
    
     next()
}
    ,(req,res,next)=>{
    console.log("res2 send")
    next()
}
    ,(req,res,next)=>{
    console.log("res3 send")
    next()
}
    ,(req,res,next)=>{
    console.log("res4 send")
    next()
})
app.listen(7777)