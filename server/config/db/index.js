const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const connect = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("Database is connected successfully");
    }).catch((err) => console.log(err));
};

// Define smchema
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  password: String,
});

const User = mongoose.model("users", userSchema);

module.exports = { connect, User };
