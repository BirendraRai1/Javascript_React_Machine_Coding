/***
 * What were issues with callbacks that promises were intoduced :It was inversion of control
 *   // callback based asynchronous function .We send the callback to third party functions and async function can call your callback multiple times 
//  //we send callback to the promise API : and promise can be rejected or resolved once in the life time 
 * */

let fs = require("fs");

// // then

//let promise = fs.promises.readFile("f1.txt");

/**
 * *then is an event listner (handler) for a promise when promise state changes to resolved
 * when multiple then are attached all the then will be executed
 * ***/

// promise.then(function (data) {
//     console.log("Hi the data is 15 " + data);
// })

// promise.then(function (data) {
//     console.log("buffer format is 20", data);
// })
// promise.then(function () {
//     console.log("I am not accepting");
// })
/****catch is an event listenre (handler) for a promise when promise state changes to reject
 * when multiple catch are attached all the catch are executed
 * ***/
// promise.catch(function (error) {
//     console.log("inside catch", error.message);
// })

// promise.catch(function (error) {
//     console.log("inside second catch", "no error message");
// })
/****
 * for then and catch the creator of promise have created only then
 * then takes two paramater and both are callback functions
 * first parameter  is compulsary  and that is invoked when your promise is resolved
 * second parameter if present called when promise is rejected
 *
 * **/
// promise.then(scb); //this promise can only handle resolved value
// promise.then(scb, fcb); //this promise can handle both resolved and rejected
// // promise.catch(fcb);//this promise can only handle the rejected promise
// promise.then(null, fcb); //this promise can only handle the rejected promise
// promise.finally(finallCB); //finally works in both the cases

// function scb(data) {
//   console.log("Hi the data is 15 " + data);
// }
// function fcb(error) {
//   console.log("inside catch", error.message);
// }

// function finallCB() {
//   console.log(" I will be called finally");
// }

/**
 * promise.catch is nothing but promise.then(null, fcb) with first parameter as null and second parameter as fcb callback
 * try catch finally
 *
 * then catch finally
 *
 * then , catch and finally are all event listener .All of them will execute
 * In case of resolve all the then methods attached to promise will execute
 * In case of reject all the catch methods attached to catch will execute
 * In case of finally all the finally methods attached to finally will execute in case of either resolved or rejected
 * resolve  , reject, finally on both the cases
 *
 * */

// Q1.
// On reject How many below methods will execute .Ans is all
//promise.then(null, fcb), promise.catch(f1cb), promise.finally(finallycb)

/***
 * Promise
 * 1. resolve  -> promise with state resolved whatever you pass into it you that value
 * 2. reject  -> promise with state rejected whatever you pass into it as the value
 *
 * **/

// const promise = Promise.resolve("resolved value");
// promise.then(function (value) {
//   console.log("value", value);
// });

// const promise1 = Promise.reject("Some error");
// promise1.catch(function (err) {
//   console.log("90");
//   console.log("error", err);
// });
// promise1
//   .then(null, function (err) {
//     console.log("90", err);
//     return 100;
//   })
//   .then(function (err) {
//     console.log("92", err);
//   });

// promise1.then(null, function (err) {
//     console.log("90", err);
// }).then(function (err) {
//     console.log("92", err);
// })

// //  when you have a second then that is attached that is chained to the first then that can either be a  value  or promise
// //  recieved by the second then is return value of the scb / fcb of the first then for demo see Q2

/*************************Q2*********************/
let promise = Promise.resolve(10);

promise
  .then(function (data) {
    console.log("92", data);
  })
  .then(function (firstThenVal) {
    console.log("113", firstThenVal);
    return 100;
  })
  .then(function (secondThenVal) {
    console.log("116", secondThenVal);
    return fs.promises.readFile("f11.txt");
  })
  .then(function (thirdThen) {
    console.log("120", thirdThen);
  })
  .catch(function (err) {
    console.log("giving wrong file");
  });
/*************************Q3*********************/

// let promise = Promise.reject(10);
// promise
//   .then(function (data) {
//     console.log("92", data);
//     return "hello";
//   })
//   .catch(function (firstThenVal) {
//     console.log("113", firstThenVal);
//     return 100;
//   })
//   .then(function (secondThenVal) {
//     console.log("116", secondThenVal);
//     return fs.promises.readFile("f1.txt");
//   })
//   .then(function (thirdThen) {
//     console.log("120", thirdThen);
//   })
//   .catch(function (firstThenVal) {
//     console.log("113", firstThenVal);
//     return 100;
//   })
//   .then(function (fourthVal) {
//     console.log("last val", fourthVal);
//   });

/***
 * when you have a catch .If it is receiving a rejected value/ error .It will take it
 * and in that case then will be completely ignored
 * and vice versa
 *
 * do not leave a rejected promise openly because that completley halt your code
 * */

/**
 * 1. Eventlistener -> then ,catch , finally
 * 2. Then -> resolved, catch -> reject, finally -> both individually
 * 2.2 -> catch will always accept -> rejection/error and  then -> always accept values/ promises
 * 3. CHaining then/catch -> rejection|Error -> catch/ everything else -> next then will be called
 * 4. no catch code stops exceuting
 * ***/

/**
 * 1.finally -> do not take anything
 * 2.for values and promises -> it does not returns anything / and neither take anything
 * 3.but for Rejection finally goes to catch and give it the error/ rejection
 *
 * **/
