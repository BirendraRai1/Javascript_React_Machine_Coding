/****
 * There are three methods to create asynchronous programming
 *  a)callback
 *  b)promises
 *  c)async await which is a syntactic sugar over promises
 *
 *
 *CallBack hell-> inital defintion
 *     1. Nesting of callbacks :-when we have have to do serial tasks using async functions.It is known as Pyramid of DOOM
 *      i want to read all the files serially
 *     2. Inversion of control : we send our callback function to an async fn and
 *  then that async fn has the control to call it(Trust issues) for example in file client.js runMlalgo code
 * so callBack hell is majorly due to inversion of control
 *
 * */

/****************heart attack code************/
// let fs = require("fs");
// console.log("Before");
// fs.readFile("./f1.txt", function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("content " + data);
//         fs.readFile("./f2.txt", function (err, data) {
//             if (err) {
//                 console.log("error " + err)
//             } else {
//                 console.log("content " + data);
//                 fs.readFile("./f3.txt", function (err, data) {
//                     if (err) {
//                         console.log("Error", err);
//                     } else {
//                         console.log("content " + data);
//                     }
//                 })
//             }
//         })
//     }
// })
// console.log("After");

/*******************Readable code*************/

let fs = require("fs");
console.log("Before");

/**
 * In case of callBacks we are trusting a third party library with you callback(i.e. your next callback to execute)
 * fs.readFile has the control to allow your code to execute or not
 * */
fs.readFile("./f1.txt", f1cb); //fs.readFile is a callback based function
function f1cb(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("content " + data);
    fs.readFile("./f2.txt", f2cb);
  }
}
function f2cb(err, data) {
  if (err) {
    console.log("error " + err);
  } else {
    console.log("content " + data);
    fs.readFile("./f3.txt", f3cb);
  }
}
function f3cb(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("content " + data);
  }
}
console.log("After");
