const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// including env variables
dotenv.config();
const { PORT, DB_PASSWORD, DB_USER } = process.env;
/**********************connection to our DB********************************/
const dbURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.drcvhxp.mongodb.net/?retryWrites=true&w=majority`;
// once
mongoose
  .connect(dbURL)
  .then(function (connection) {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

// with this your creating simple app -> api
const app = express();
const UserRouter = require("./router/UserRouter");
const ProductRouter = require("./router/ProductRouter");
const AuthRouter = require("./router/AuthRouter");
const BookingRouter = require("./router/BookingRouter");
const ReviewRouter = require("./router/ReviewRouter");
//The below addition is very dangerous.Which ever origin is passed and which ever credentials is passed I am allowing all of it.There is not much trouble with credentials
//but with origin it is saying that whichever client is requesting to the server it is allowing it.Anyone with any config can call you
const corsConfig = {
  origin: true,
  credentials: true,
};
//we can set origin as http://localhost:5174 to allow react application coming from 5174 port only
// this is allowing all the requests
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

// app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/user", UserRouter);
app.use("/api/product", ProductRouter);
app.use("/api/auth", AuthRouter);
app.use("/api/booking", BookingRouter);
app.use("/api/review", ReviewRouter);

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

/***
 * At code level -> prevent Repetiton -> Factory(controllers)
 * At file level -> structure to segregate the code  -> MVC
 * **/
