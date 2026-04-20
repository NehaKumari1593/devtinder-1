const express=require("express")
const User= require("./models/user.js")
const  connectDB=require("./config/database.js")
const { connect } = require("mongoose")


const app=express()
app.use(express.json())



 app.post("/signup",async (req,res)=>{
  const data=req.body
  console.log(data)
  try{
    const user=new User(data)
    await user.save()
    res.send("user added succesfullly")
  }
catch{
  res.send("something went wrong")
}
 })
 app.patch("/signup",async (req,res)=>{
  const data=req.body
  const user=await User.findOneAndUpdate({firstName:"Kalakar"},data,{runValidators:true})
  res.send("done")
 })

  
connectDB().then(()=>{
  app.listen(7777)
}).catch((err)=>{
  console.log("wrong")
})





