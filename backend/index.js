const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");



const PORT = process.env.PORT || 8000;

const app = express()
app.use(cors());
app.use(express.json({limit : "10mb"}))
app.get('/',(req,res)=>{
    res.send("server Running")
})

app.post('/signup',(req,res)=>{
console.log(req.body);
})

app.listen(PORT,()=> console.log("Server is Running at port :",PORT));