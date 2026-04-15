const express =require("express")
const {adminAuth,userAuth}=require("./middlewares.js/auth.js")
const app=express()



app.get("/user",userAuth,(req,res)=>{
  res.send("welcome user ")
})


app.post("/login",(req,res)=>{
  res.send("logged in succesfully")
})

app.use("/admin",adminAuth)

app.get("/admin/getAllData",(req,res)=>{
  res.send("data is send ")
})
app.get("/admin/deleteTheUser",(req,res)=>{
 
  res.send("user is deleted")
  
})




app.listen(7777)