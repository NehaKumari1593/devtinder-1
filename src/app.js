const express=require("express")
const User= require("./models/user.js")
const  connectDB=require("./config/database.js")
const { connect } = require("mongoose")


const app=express()
app.use(express.json())


//  --------------------.findOne({})----------------
// app.get("/user",async (req,res)=>{
//   const email=req.body.email
//   const user =await User.findOne({email:email})
//   if(!user)
//   {
//     res.send("user not found")
//   }
//   else{
//     res.send(user)
//   }
// })

 //--------------------.find({one})----------------
app.get("/user", async (req,res)=>{
  const email=req.body.email
     const user=await User.find()
     if(user.length===0)
     {
      res.send("user notfound")
     }
     else{
      res.send(user)

     }
})


//--------------------.find({})----------------
app.get("/users", async (req,res)=>{
  const users=await User.find({})
  if(users.length===0)
  {
   res.send("not user")
  }
  else{
   res.send(users)
  }

})


connectDB().then(()=>{
app.listen(7777)
}).catch((err)=>{
console.log("db not connected")
})







