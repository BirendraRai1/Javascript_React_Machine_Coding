/**
 * Here we are creating a function promReadFile that is a promise based
 * function that actually work like fs.readFile callback function
 * promisifiy  fs.readfile or convert callback based fs.readFile into a promised based function
 * */

let fs = require("fs");

function promReadFile(filePath) {
  // 1. we have to return a promise
  // 2. and also decide when to call then , and when to call catch
  return new Promise((resolve, reject) => {
    //basically promise is an object
    fs.readFile(filePath, function (err, data) {
      // behavior of resolve and reject
      //  when you call resolve from the creator function two things happen state and value
      // resolve ->
      // state is fullfilled and it is resolved
      //value is whatever you pass into
      // when you call reject from the creator function two things happen state and value
      // reject ->
      // state is fullfilled  and it is rejected
      //value iswhatever you pass into ->
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

/***consumption**/
console.log("Before");
const promise = promReadFile("./f1.txt");

promise.then(function (futureValue) {
  console.log("Data inside the file is " + futureValue);
});
promise.catch(function (err) {
  console.log("err", err);
});
console.log("After");

/**
 *
 * initially callback was passed to third party async fns
 * here we are passing callback to promise based function then and catch ->third party async fn
 * **/
