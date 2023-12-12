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
  .then(() => console.log("Database Connected ->"))
  .catch((err) => console.log("Error Message ->", err));

//User Schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

//User Model
const UserModel = mongoose.model("user", userSchema);

//Api
app.get("/", (req, res) => {
  res.send("server Running at port 8000 ....Mongoose Connected ....");
});
//Api signup
app.post("/signup", async (req, res) => {
  console.log("Index Signup Result ->", req.body);
  const { email } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      res.send({ message: "Email id already exist", alert: false });
    } else {
      const newUser = new UserModel(req.body);
      const savedUser = await newUser.save();
      res.send({ message: "Registered Successfully", alert: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
//User Api login
app.post("/login", async (req, res) => {
  console.log("Index Login Request Body ->", req.body);
  const { email } = req.body;

  try {
    const result = await UserModel.findOne({ email: email });

    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      console.log("Index Data Send ->", dataSend);
      res.send({ message: "Login is successful", alert: true, data: dataSend });
    } else {
      res.send({ message: "Email not found, please sign up", alert: false });
    }
  } catch (err) {
    console.error("Error in login:", err);
    res.status(500).send({ message: "Internal Server Error", alert: false });
  }
});

//Product Section

//Product Schema
const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});

//Product Model
const productModel = mongoose.model("product", schemaProduct);

//Save Products
app.post("/uploadProducts", async (req, res) => {
  // console.log("Index Upload Product Request Body ->",req.body);
  const data = await productModel(req.body);
  const dataSave = await data.save();
  res.send({ message: "Upload Successfully" });
});

//Payment Integration
app.post("/checkout-payment", async (req, res) => {
  res.send({ message: "Payment gateway", success: true });
});

//Product API
app.get("/product", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});

app.listen(PORT, () => console.log("Server is Running at port :", PORT));
