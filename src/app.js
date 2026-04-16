const express=require("express")
const User= require("./models/user.js")
const  connectDB=require("./config/database.js")
const { connect } = require("mongoose")

const app=express()
app.post("/signup",async(req,res)=>{

  const user=new User({
    
    firstName:"neha",
    lastName:"kumari",
    email:"neha@gmail.com",
    password:"aaa",
    "age":22
  })
 
try{
  await user.save()
  res.send("logged in succesfully")}
  catch(err){
    res.send("user is not Logged in ")
  }
})


connectDB().then(()=>{
app.listen(7777)
}).catch((err)=>{
console.log("db not connected")
})







