const express=require("express")
const User= require("./models/user.js")
const  connectDB=require("./config/database.js")
const { connect } = require("mongoose")


const app=express()
app.use(express.json())

app.post("/signup",async(req,res)=>{
  console.log(req.body)
const user=new User(req.body)
    try{
      await user.save()
      res.send("use logged in succesfully")
    }
    catch{
      res.send("something wrong")
    }
   

  
})


connectDB().then(()=>{
app.listen(7777)
}).catch((err)=>{
console.log("db not connected")
})







