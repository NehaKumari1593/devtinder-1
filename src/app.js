const express=require("express")
const User= require("./models/user.js")
const  connectDB=require("./config/database.js")
const { connect } = require("mongoose")
const {validateUserData}=require("./utils/validator.js")
const bcrypt=require("bcrypt")

const app=express()
app.use(express.json())



 app.post("/signup",async (req,res)=>{
  try{
    const {
    firstName,lastName,email,password
    }=req.body
    validateUserData(req.body)           //validate function


    //encrpt logic
   const hashPassword=await bcrypt.hash(password,10)

    const user=new User({
      firstName,
      lastName,
      email,
      password:hashPassword
    })
    await user.save()
    res.send("user added succesfullly")
  }
catch(err){
  res.send(err.message)
}
 })



//patch logic

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
  catch(err){
    res.send(err.message)
  }
 })

  
connectDB().then(()=>{
  app.listen(7777)
}).catch((err)=>{
  console.log("wrong")
})





