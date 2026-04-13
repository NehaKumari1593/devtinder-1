const express =require("express")
const app=express()
app.use("/tes",(req,res)=>{
 res.send("heloo im server")
})

app.listen(7777)