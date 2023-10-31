const fs = require("fs");
console.log("before");
/***
 * 1. Promise based function takes the input and
 * 2. Returns a promise and the value/state of the promise -> promise based  fn
 * 3. Promise object gives two method then and catch
 * 4. It does not take a callback
 * ***/
const promise = fs.promises.readFile("./f1.txt"); //fs.promises.readFile is a promise based function
/**
 * then is  an event listener over promise.that is a function when promise is resolved (task is done)
 * **/

promise.then(function (futureValue) {
  console.log("Data inside the file is " + futureValue);
});
/***
 * catch -> is also an event listener on promises .That is a fn when promise is rejected(You get an error       )
 * */
promise.catch(function (err) {
  console.log("err", err);
});
/**
 * State of the promise-> pending
 * */
// console.log(promise);
console.log("After");

// setTimeout(() => {
//     console.log("i after file read")
//     console.log(promise);
// }, 2000);
