const express =require("express")
const app=express()


app.get(/^\/a(b)?c/, (req, res) => {
    
  res.send({
    firstname: "Neha",
    lastname: "kumari"
  });
});
app.get(/^\/a(b)+c/, (req, res) => {
    
  res.send({
    firstname: "Neha",
    lastname: "kumari"
  });
});
app.get("/ab*c", (req, res) => {
    
  res.send({
    firstname: "Neha",
    lastname: "kumari"
  });
});
app.get("/abc", (req, res) => {
    console.log(req.query)
  res.send({
    firstname: "Neha",
    lastname: "kumari"
  });
});
app.get("/abc/:name/:password", (req, res) => {
    console.log(req.params)
  res.send({
    firstname: "Neha",
    lastname: "kumari"
  });
});




app.listen(7777)