import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
//Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/blog")
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });
