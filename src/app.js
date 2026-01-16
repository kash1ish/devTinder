const express = require("express");

const app = express();
 
app.use("/user",(req,res,next)=>{
    //route handler
    //app.use can handle any method
    next();
    console.log("1")
   // res.send("route handler 1");
},(req,res,next)=>{
    console.log("2")
    //res.send("route handler 2");
    next();
})

app.listen(3000);