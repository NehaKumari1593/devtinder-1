const express=require("express")
const User= require("./models/user.js")
const  connectDB=require("./config/database.js")
const { connect } = require("mongoose")


const app=express()
app.use(express.json())



 app.post("/signup",async (req,res)=>{
  const data=req.body
    const password=req.body.password
    if(password.length<8)
    {
      throw new Error("plz enter password greater than 8 words")
    }
    
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
  const data=req?.body
  const allowUpdate=["skill","age","gender","password","photoUrl"]
  const isUpdateAllow=Object.keys(data).every((k)=>allowUpdate.includes(k))
  const skill=req?.body?.skill
  if(skill.length>10)
  {
    throw new Error("skill length is too long")
  }
  if(!isUpdateAllow)
  {
    throw new Error(" this update nopt allowed")
  }
  try{
  const user=await User.findOneAndUpdate({firstName:"richa"},data,{runValidators:true})
  res.send("updated ")
  }
  catch{
    res.send("something went wrong")
  }
 })

  
connectDB().then(()=>{
  app.listen(7777)
}).catch((err)=>{
  console.log("wrong")
})





