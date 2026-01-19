const mongoose = require("mongoose");

const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://kash1ish:k2114%40shish@cluster0.fme53.mongodb.net/devTinder");
}

module.exports = connectDB;