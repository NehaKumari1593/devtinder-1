const express =require("express")
const {adminAuth,userAuth}=require("./middlewares.js/auth.js")
const app=express()


app.get("/",(req,res)=>{
  // try{
  throw new Error("errrror")
 res.send("res send")
  // }
  // catch(err)
  // {
    res.send("something went wrong 1")
  // }
})
app.use("/",(err,req,res,next)=>{
 if(err){
  res.status(500).send("something went wrong")
 }

})




app.listen(7777)