const express =require("express")
const app=express()


app.get("/user",(req,res)=>{
    res.send({
        firstname:"Neha",
        lastname:"kumari"

    })
})
app.use("/user",(req,res)=>{
  res.send("hahhhaaa")
})
app.post("/user",(req,res)=>{
    console.log("data is send")
    res.send("data is send")
})

app.delete("/user",(req,res)=>{
    res.send("data is deleted succesfully")
})



app.listen(7777)