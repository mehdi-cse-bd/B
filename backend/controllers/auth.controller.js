import User from "../models/user.model.js";
import bcryprjs from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // console.log(req.body);
    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      return res.status(400).send({
        success: false,
        message: "Backend: Please fill all fields",
        // error,
      });
    }
    const hashedPassword = bcryprjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).send({
      success: true,
      message: "Backend: New user has been created",
      newUser,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Backend: Error in /register auth.controller.js",
      success: false,
      errorMessage: error.message,
      fullError: error,
    });
  }
};
