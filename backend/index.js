import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js";
dotenv.config();
const app = express();

//Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/blog")
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3001, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/user", userRoutes);
