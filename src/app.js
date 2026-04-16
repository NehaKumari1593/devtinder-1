const express=require("express")
const User= require("./models/user.js")
const  connectDB=require("./config/database.js")
const { connect } = require("mongoose")


const app=express()
app.use(express.json())


app.delete("/deleteUser",async (req,res)=>{
  try{
   const id=req.body._id
   console.log(id)
   const user=await User.findByIdAndDelete(id)
    res.send(user)
  }
  catch{
res.send("something wrong")
  }
}

 )

 app.patch("/update",async (req,res)=>{
  try{
  const id=req.body._id;
  const data=req.body;
  const user=await User.findByIdAndUpdate(id,data)  
  //                                             ,option ={returnDocument:"after"}
  res.send(user)
  }
  catch{
    res.send("something wrong")
  }

 })
connectDB().then(()=>{
  app.listen(7777)
}).catch((err)=>{
  console.log("wrong")
})





