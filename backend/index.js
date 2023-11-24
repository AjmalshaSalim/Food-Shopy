const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

//Mongodb
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

//Schema
const userSchema = mongoose.Schema({
  firstName: String,
  LastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

//Model
const UserModel = mongoose.model("user", userSchema);

//Api
app.get("/", (req, res) => {
  res.send("server Running");
});
app.post("/signup", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      res.send({ message: "Email id already exist" });
    } else {
      const newUser = new UserModel(req.body);
      const savedUser = await newUser.save();
      res.send({ message: "Registered Successfully", user: savedUser });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log("Server is Running at port :", PORT));
