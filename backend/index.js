const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require ("dotenv").config()



const PORT = process.env.PORT || 8000;

const app = express()
app.use(cors());
app.use(express.json({limit : "10mb"}))

//Mongodb
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log("database connected"))
.catch((err)=>console.log(err))

//Schema
const userSchema = mongoose.Schema({
    firstName: String,
    LastName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    confirmPassword: String,
    image: String,
})

//Api   
app.get('/',(req,res)=>{
    res.send("server Running")
})

app.post('/signup',(req,res)=>{
console.log(req.body);
})

app.listen(PORT,()=> console.log("Server is Running at port :",PORT));