const express =require("express")
const app=express()

app.use("/",(req,res,next)=>{
  console.log("first request handler")
  next()
})
app.post ("/aa",(req,res,next)=>{
  console.log("second request handler")
  next()
})
app.get ("/",[
  (req,res,next)=>{
  console.log("third  request handler")
  next()

  
},
(req,res,next)=>{
  console.log(" forth  request handler")
 
  next()
},
(req,res,next)=>{
  console.log("fifth request handler")
  res.send("re4 send")
 }]
)




app.listen(7777)