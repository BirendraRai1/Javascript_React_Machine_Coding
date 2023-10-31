const fs = require("fs");

/**
 * Promise based function :-do not take  callBacks
 * Promises are part of javascript api .It is an object and It has two states that is pending or
 * fullfilled and two values that is initially undefined
 * and value that was supposed to be there
 * **/

console.log("before");
// task has started when fn is called
const promise = fs.promises.readFile("./f1.txt");
/**
 * initially it print the state of the promise i.e.pending at time of submission only
 * */
console.log(promise);
console.log("After");

setTimeout(() => {
  console.log("i after file read");
  console.log(promise);
}, 2000);
