const express = require("express");

const app = express();
 
app.use("/test",(req,res)=>{
    res.send("Hello from test");
})

app.use("/hello",(req,res)=>{
    res.send("Hello");
})

app.use("/",(req,res)=>{
    res.send("Hello from dashboard");
})

app.listen(3000);