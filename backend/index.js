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

//Model
const UserModel=mongoose.model("user",userSchema)

//Api   
app.get('/',(req,res)=>{
    res.send("server Running")
})

app.post('/signup',async(req,res)=>{
console.log(req.body);
const {email}= req.body;
UserModel.findOne({email:email},(err,result)=>{
    console.log(result)
    console.log(err);
    if(result){
        res.send({message :"Email is already exist"})
    }else{
const data=UserModel(req.body)
const save=data.save()
res.send({message:"Registered Successfully"})
    }
})
})

app.listen(PORT,()=> console.log("Server is Running at port :",PORT));