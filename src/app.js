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
const {userAuth}=require("./middlewares.js/auth.js")
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
const isMAtched=await user.bcrypt(password)
if(isMAtched)
{
  //res.cookie(name,value)
//  res.cookie("token","jncjcnxjcnjncjdnjcnjdncjdbvhvhjvjc")

const token=await user.getJWT()    //user call this mthat why this -user n that function
res.cookie("token",token,{
    expires: new Date(Date.now() + 8 * 3600000) })// cookie will be removed after 8 hours)

 
}
    res.send("user login succesfullly")
  }
catch(err){
  res.send(err.message)
}
 })




app.get("/profile",userAuth,async (req,res)=>{
  res.send(req.user)
})

app.get("/sendRequest",userAuth,async(req,res)=>{
  res.send(req.user.firstName+"send request ")
})
 



 

  
connectDB().then(()=>{
  app.listen(7777)
}).catch((err)=>{
  console.log("wrong")
})





