/****
 * Synchronous code:-the code that excutes line by line
 * **/

// console.log("Before");
// function fn() {
//   console.log("I am fn");
// }
// fn();
// console.log("After");

/***
 * Asynchronous code :- piece of code is executed at current point of time
 *  and other piece of code is executed on later part
 *
 *
 * */

// 1
// console.log("Before");
// // 3
// function fn() {
//     console.log("I am fn");
// }
/**
 * setTimeout functions are known as asynchronous function.fn is the callback of setTimeout
 * ****/
// setTimeout(fn, 2000);
// // 2
// console.log("After");

/***
 * Enviornment : when the environment is Browser.The below things are given by environment
 * The below things are part of Web API .The browser has a component web API that provides these features
 * console -> is not part of JS
 * window :  -> is not part of JS
 * document : -> is not part of JS
 * fetch :
 * eventListners -> not part of JS
 * I/O -> not part of JS
 * Enviornment : when the environment is NodeJs.The below things are given by NodeJs environment
 * fs : nodejs
 * Http : nodejs
 * child_process : nodejs
 * I/O ->not part of JS
 * A simple thumbrule is :-
 *  a)Enviornment :provides you the feature
 *  b) JS : provides the logic
 *  -> Programmer :
 *          From C++ to Java :- pointer were taken care of in java
 *          From JAVA to JS :-there are no threads to take care of
 *  Inference : You cannot create an asynchronous fns as a programmer. Your Enviornment will give you
 * */
/*********Question********************/
//If you have a task present in your call Stack you can only get new task when the call stack is empty
// let a = true;
// console.log("Before");

// setTimeout(() => {
//   a = false;
//   console.log("I broke the while loop");
// }, 1000);
// console.log("After");
// while (a) {}

/****************Question**************************/
//The timer attached to the setTimeout is the minimum time at which its callback will execute.
//here the callback attached to the setTimeout will execute after 5 secs
let a = true;
console.log("Before");

setTimeout(() => {
  a = false;
  console.log("I broke the while loop");
}, 1000);
console.log("After");
let timeInfuture = Date.now() + 5000;
while (Date.now() < timeInfuture) {}

/*************Question*************************/
//Here the callback cb1 attached to setTimeout will execute after 6 seconds because of the nature of environment of the call stack
console.log("Before");
const cb2 = () => {
  console.log("set timeout 1");
  let timeInfuture = Date.now() + 5000;
  while (Date.now() < timeInfuture) {}
};
const cb1 = () => console.log("hello");
setTimeout(cb2, 1000);

setTimeout(cb1, 2000);

console.log("After");

//event loop :-It checks whether stack is empty or not and only sends the callback when stack is empty
