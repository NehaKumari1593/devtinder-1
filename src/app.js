const express=require("express")
const app=express()
const User= require("./models/user.js")
const  connectDB=require("./config/database.js")
const { connect } = require("mongoose")
const {validateUserData}=require("./utils/validator.js")
const bcrypt=require("bcrypt")
const validator=require("validator") 
const cookieParser=require("cookie-parser")
const jwt =require("jsonwebtoken")
app.use(express.json())
app.use(cookieParser())

app.post("/signup",async (req,res)=>{
  try{
    const {
    firstName,lastName,email,password
    }=req.body
    if(!email)
    {
      throw new Error("enter  email")
    }
    
  let hashPassword=await bcrypt.hash(password,10)
       //validate function

let user=new User({
  firstName,
  lastName,
  email,
  password:hashPassword

})
 await user.save()
   
    
    res.send("user signup succesfullly")
  }
catch(err){
  res.send(err.message)
}
 })


 app.post("/login",async (req,res)=>{
  try{
    const {
    email,password
    }=req.body
    if(!email)
    {
      throw new Error("enter  email")
    }
    
  
       //validate function

let user=await User.findOne({email:email})
if(!user)
{
  throw new Error("eamil invalid crediability")
}
const isMAtched=await bcrypt.compare(password,user.password)
if(isMAtched)
{
  //res.cookie(name,value)
//  res.cookie("token","jncjcnxjcnjncjdnjcnjdncjdbvhvhjvjc")

const token=await jwt.sign({id:user._id},"dev@tinder")
res.cookie("token",token)

 
}
   
    
    res.send("user login succesfullly")
  }
catch(err){
  res.send(err.message)
}
 })

app.get("/profile",async (req,res)=>{
  const cookies=req.cookies
  const {token}=cookies
  const decodeMessage=await jwt.verify(token,"dev@tinder")
  const {id}=decodeMessage
  
 const user=await User.findById(id)
  res.send(user)
})
 



 

  
connectDB().then(()=>{
  app.listen(7777)
}).catch((err)=>{
  console.log("wrong")
})





