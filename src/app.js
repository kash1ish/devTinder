const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

app.use(express.json());

app.get("/user", async(req,res)=>{
    try{
        const user = await User.find({email: req.body.email});
    if(!user){
        res.status(404).send("User not found");
    }else{
        res.send(user);
    }
    }
    catch(err){
        res.send("Something went wrong")
    }
})

app.get("/feed",async (req,res)=>{
    try{
        const users = await User.find({});
        if(users.length == 0){
            res.status(404).send("There are no users")
        }else{
            res.send(users)
        }
    }
    catch(err){
        res.send("Something went wrong");
    }
})
 
app.post("/signup", async(req,res)=>{
    const user = new User(req.body);

    try{
        await user.save();
        res.send("User signed up successfully");
    }
    catch{
        res.status(404).send("User can't signup");
    }
})

app.delete("/delete",async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.body._id);
        res.send("User deleted successfully");
    }catch(err){
        res.status(400).send("Something went wrong");
    }
})

app.patch("/update", async(req,res)=>{
    const data = req.body;
    try{
        const user = await User.findByIdAndUpdate(req.body._id, data)
        res.send(user);
    }
    catch(err){
        res.send("Something went wrong");
    }
})


connectDB()
.then(()=>{
    console.log("Connection Established");
    app.listen(3000, ()=>{
        console.log("Server is listening on the port 3000");
    })
})
.catch(()=>{
    console.error('Error connecting to the db');
})