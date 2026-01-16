const express = require("express");
const { adminAuth, userAuth} = require("./middlewares/auth")
const app = express();
 
app.get("/user/getData", userAuth,(req,res)=>{
    res.send("This is User data");
})

app.get("/user/delete", userAuth,(req,res)=>{
    res.send("User Deleted");
})

app.get("/admin/getData", adminAuth, (req,res)=>{
    throw new Error("data unable to fetch");
    res.send("This is admin data")
})

app.get("/admin/delete",adminAuth,(req,res)=>{
    res.send("Admin Deleted")
})

app.use("/",(err,req,res,next)=>{
    res.send("something went wrong");
})


app.listen(3000);