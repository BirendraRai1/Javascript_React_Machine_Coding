// express is imported
const express = require("express");
// syntax
const fs = require("fs");
const short = require("short-uuid"); //this package creates unique id
const app = express();

// reading the content

app.get("/api/user", function (req, res) {
  try {
    console.log("I am inside  get method");
    const strContent = fs.readFileSync("./dev-data.json", "utf-8");
    // console.log("strContent is", strContent);
    const userDataStore = JSON.parse(strContent);
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
});
// you need to express.json
app.use(express.json());
// add a middlewarep
// middle ware -> validates the input
app.use(function (req, res, next) {
  // console.log("36",req.method);
  if (req.method == "POST") {
    // check if the body is empty or not
    const userDetails = req.body;
    console.log("userDetails is ", req.body);
    const isEmpty = Object.keys(userDetails).length == 0;
    if (isEmpty) {
      res.status(400).json({
        status: "failure",
        message: "userDetails are empty",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
/******************create user ***************/
app.post("/api/user", function (req, res) {
  const id = short.generate();
  const userDetails = req.body;
  userDetails.id = id;
  const strContent = fs.readFileSync("./dev-data.json", "utf-8");
  // console.log("strContent is", strContent);
  const userDataStore = JSON.parse(strContent);
  userDataStore.push(userDetails);
  // adding user to the file
  const struserStore = JSON.stringify(userDataStore);
  fs.writeFileSync("./dev-data.json", struserStore);

  res.status(200).json({
    status: "successfull",
    message: `update the user with ${id}`,
  });
});
app.get("/api/user/:userId", function (req, res) {
  try {
    const userId = req.params.userId;
    const userDetails = getUserByid(userId);
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
});

app.patch("/api/user/:userId", function (req, res) {
  const strContent = fs.readFileSync("./dev-data.json", "utf-8");
  let userDataStore = JSON.parse(strContent);
  const id = req.params.userId;
  let flag = false;
  let obj = req.body;
  for (let i = 0; i < userDataStore.length; i++) {
    if (userDataStore[i].id == id) {
      for (let keys in obj) {
        userDataStore[i][keys] = obj[keys];
      }
      flag = true;
      fs.writeFileSync("./dev-data.json", JSON.stringify(userDataStore));
      res.status(200).json({
        status: "success",
        user: userDataStore[i],
      });
    }
  }
  if (!flag) {
    res.status(400).json({
      status: "failure",
      message: `user with ${id} does not exist`,
    });
  }
});
app.delete("/api/user/:userId", function (req, res) {
  const strContent = fs.readFileSync("./dev-data.json", "utf-8");
  let userDataStore = JSON.parse(strContent);
  const id = req.params.userId;
  let flag = false;
  //console.log("userDataStore in delete API is ", userDataStore);
  for (let i = 0; i < userDataStore.length; i++) {
    if (userDataStore[i].id == id) {
      userDataStore.splice(i, 1);
      flag = true;
      let struserStore = JSON.stringify(userDataStore);
      fs.writeFileSync("./dev-data.json", struserStore);
      res.status(200).json({
        status: "success",
        message: "user deleted successfully",
      });
    }
  }
  if (!flag) {
    res.status(400).json({
      status: "failure",
      message: `The user with ${id} is not found`,
    });
  }
});

function getUserByid(id) {
  const strContent = fs.readFileSync("./dev-data.json", "utf-8");
  // console.log("strContent is", strContent);
  const userDataStore = JSON.parse(strContent);
  const user = userDataStore.find((user) => {
    return user.id == id;
  });
  if (user == undefined) {
    return "no user found";
  } else {
    return user;
  }
}
// 404 route not found
app.use(function cb(req, res) {
  // console.log("");
  // response
  res.status(404).json({
    status: "failure",
    message: " route not found",
  });
});

const port = process.env.PORT || 3000;
// server -> run on a port
app.listen(port, function () {
  console.log(" server is listening to port 3000");
});
