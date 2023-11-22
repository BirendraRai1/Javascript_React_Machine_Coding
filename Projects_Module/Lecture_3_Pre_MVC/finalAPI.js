// express is imported
const express = require("express");
// syntax

const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const { PORT, DB_PASSWORD, DB_USER } = process.env;

const app = express();

// driver
const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ncspawo.mongodb.net/?retryWrites=true&w=majority`;
mongoose
  .connect(dbURL)
  .then(function (connection) {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));
// ecommerce -> Amazon
const UserModel1 = require("./UserModel");
app.use(express.json());

const checkInput = (req, res, next) => {
  // console.log("36",req.method);
  // check if the body is empty or not
  const userDetails = req.body;
  const isEmpty = Object.keys(userDetails).length == 0;
  if (isEmpty) {
    res.status(400).json({
      status: "failure",
      message: "userDetails are empty",
    });
  } else {
    next();
  }
};
const getAllUserHandler = async (req, res) => {
  try {
    console.log("I am inside  get method");

    const userDataStore = await UserModel1.find();
    if (userDataStore.length == 0) {
      throw new Error("No users are present");
    }
    res.status(200).json({
      status: "success",
      message: userDataStore,
    });
  } catch (err) {
    res.status(404).json({
      status: "failure",
      message: err.message,
    });
  }
};
const createuserHandler = async (req, res) => {
  try {
    const userDetails = req.body;
    // adding user to the file
    const user = await UserModel1.create(userDetails);

    res.status(200).json({
      status: "successfull",
      message: `added  the user `,
      user: user,
    });
  } catch (err) {
    res.status(500).json({
      status: "failure",
      message: err.message,
    });
  }
};
const getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userDetails = await UserModel1.findById(userId);

    if (userDetails == "no user found") {
      throw new Error(`user with ${userId} not found`);
    } else {
      res.status(200).json({
        status: "successfull",
        message: userDetails,
      });
    }
  } catch (err) {
    res.status(404).json({
      status: "failure",
      message: err.message,
    });
  }
};
const updateUserById = async (req, res) => {
  try {
    let id = req.params.userId;
    let obj = req.body;
    let options = {
      returnDocument: "after",
      upsert: "false",
    };
    const user = await UserModel1.findByIdAndUpdate(id, obj, options);
    return res.status(200).json({
      status: "success",
      user,
    });
  } catch (err) {
    return res.status(400).json({
      status: "failure",
      message: err.message,
    });
  }
};
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.userId;
    const deletedUser = await UserModel1.findByIdAndDelete(id);
    console.log("deletedUser", deletedUser);
    if (deletedUser) {
      res.status(200).json({
        status: "success",
        message: deletedUser,
      });
    } else {
      res.status(404).json({
        status: "failure",
        message: `User with ${id} doesnot exist`,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "failure",
      message: err.message,
    });
  }
};

/***********routes**************/
//we should avoid function hoisting because same function can be created later also and when doing so the function which is created later will be executed not the original one
//.This may lead to bug .So we should use function declaration
app.get("/api/user", getAllUserHandler);
app.post("/api/user", checkInput, createuserHandler);
app.get("/api/user/:userId", getUserById);
app.patch("/api/user/:userId", updateUserById);
app.delete("/api/user/:userId", deleteUserById);
/******************handler functions ***************/

// 404 route not found
app.use(function cb(req, res) {
  // console.log("");
  // response
  res.status(404).json({
    status: "failure",
    message: " route not found",
  });
});

// server -> run on a port
app.listen(PORT, function () {
  console.log(` server is listening to port ${PORT}`);
});
