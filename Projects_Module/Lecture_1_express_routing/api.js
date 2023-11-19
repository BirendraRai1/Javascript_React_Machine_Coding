/*questions related to express
    1>why express is a middleware
    2>send different kind of request
    3>mounting(creating MVC architecture)
***/
/*Node js is an environment .It has few modules.Out of that we have http module
and with this http module we can create apis but the syntax is difficult
So we can understand that express is not but a javascript code that acts like a wrapper
over a http module
****/
// express is imported and it is a middleware to send and receive api request.It is a framework and it is a light weight
//In backend we generally use require instead of import
const express = require("express");
// syntax
const app = express(); //to construct api we call express and the naming convention is to use app
const fs = require("fs");
/*Different kinds of middleware in express
    1>inbuilt
    2>Third party :morgan()//it is used for simple logging on terminal
    3>userDefined middleware
****/

/*apart from req and res object we have a third parameter known as next
 *with the next the code doenot seize .It passes to the next middleware.without the use of next
 *the response would have been sent and it would not execute the code furthur
 *So next can act as a bodyguard.Let say for certain routes you need to be logged in.In app.use callback function we can check for token if
 *token is present we can call next otherwise we can send response from here only
 * ***/
//The below middleware is an example of user defined middleware
app.use(function (req, res, next) {
  console.log("Hi I will be called everytime");
  next();
});
//There are certain middleware which are part of express only and these are predefined middleware
//express.json() is an inbuilt middleware given by the express.Its function is to add  data coming in body of HTTP request to req.body
//so app.use has no access to data in the body.To have access you have to call express.json()
app.use(express.json());
console.log("hello");

// when someone makes a get request on the route /api/user then please execute the handler/callback function
app.get("/api/user", function (req, res) {
  console.log("I am inside  get method");
  res.status(200).json({
    status: "success",
    message: " sending resp from get method",
  });
});

/*what is web API
 *   ans>It provides data in certain format following certain rules
 ********/

app.post("/api/user", function (req, res) {
  console.log("I am inside  post method", req.body);
  res.status(200).json({
    status: "success",
    message: " sending resp from post method",
  });
});

/****
 * app.use is basically a method given by express
 * You can pass a handler function and this handler function is nothing but a callback function
 * and this callback function gets two variable ->
 * 1. req : object representing request
 * 2. res : object representing response
 * In layman app.use is basically a guy who tells that always use me
 * ** */

/*app.use, app.get,app.post,all these are middleware
 *app.use is a superset of all the methods and if passed earlier it executes and return the response
 *even though the route is present later
 *so app.use should be the last item in the code
 ***/

app.use(function cb(req, res) {
  console.log("I am inside app.use");
  res.status(404).json({
    status: "failure",
    message: " route not found",
  });
});

/* process.env variable is inbuilt and it is exposed like you have global or window object in browser
 *****/

const port = process.env.PORT || 3000;
// server will always run on a port.On a particular physical machine there could be multiple server running.
//All of the server should have a unique identifier and the ports are unique identifier
app.listen(port, function () {
  console.log(" server is listening to port 3000");
});
