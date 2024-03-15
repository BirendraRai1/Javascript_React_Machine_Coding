/*what is async?
 *Async is a keyword that is used before a function to create a async function
 *Async function always return a promise rather than a normal function
 *Async and await combo is used to handle promises
 *Await is a keyword that can only be used inside a async function
 * difference between async await and then() catch()
 * The difference is that in an async function, JavaScript will pause the function execution until the promise settles.
 *  With then(), the rest of the function will continue to execute but JavaScript won't execute the .then() callback until the promise settles
 * *************/

// async function getData() {
//   return "Namaste"; //either you return a promise function or if you return a value it will automatically wrap inside a promise and then return you
// }
// const dataPromise = getData(); //here dataPromise will not get "namaste" instead it will be wrapped inside promise
// console.log("dataPromise is ", dataPromise);
// dataPromise.then((res) => console.log(res));

// const p = new Promise((resolve, reject) => {
//   resolve("Promise Resolved value");
// });

// async function promiseData() {
//   return p; //since p is a promise. So it will not be wrapped .It will be directly returned
// }

// const getPromise = promiseData(); //here getPromise will get the value of p
// console.log("getPromise is ", getPromise);
// getPromise.then((res) => console.log(res));

// //before async await how you used to handle promises
// function beforeAsync() {
//   p.then((res) => console.log("before async", res));
// }

// beforeAsync();

// async function handlePromise() {
//   const val = await p; //principle of async await is always use keyword await infront of promise when we use await the promise will be resolved and the data will come inside val
//   console.log("val is ", val);
// }
// handlePromise();

//difference between normally handling promise and handling promise using async await
const promVal1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value in 10 sec");
  }, 10000);
});

const promVal2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value in 5 sec");
  }, 5000);
});

// async function handlePromVal() {
//   //here js engine was waiting for promise to be resolved and namaste javascript will be printed after the promise is resolved
//   const val = await promVal1;
//   console.log("namaste Javascript from handlePromVal");
//   console.log("val is ", val);
// }
// handlePromVal();

// function getPromVal() {
//   //In this case JS Engine will not wait for promise to be resolved and namaste javascript will be printed before the promise is resolved
//   promVal2.then((res) => console.log(res));
//   console.log("namaste Javascript");
// }
// getPromVal();

// async function handleTwoProm() {
//   console.time();
//   const val1 = await promVal2;
//   console.timeEnd();
//   console.log("namaste Javascript 1");
//   console.log("val1 is ", val1);
//   console.time();
//   const val2 = await promVal1;
//   console.timeEnd();
//   console.log("namaste Javascript 2");
//   console.log("val1 is ", val2);
// }
// // //here val1 promise is resolved in 5 sec so it will be printed after 5 seconds and val2 promise is resolved in 10 seconds so it will be printed after 10 seconds
// handleTwoProm();

async function handleThreeProm() {
  console.time();
  const val1 = await promVal1;
  // console.timeEnd();
  console.log("namaste Javascript 1");
  console.log("val1 is ", val1);
  //console.time();
  const val2 = await promVal2;
  console.timeEnd();
  console.log("namaste Javascript 2");
  console.log("val1 is ", val2);
}
handleThreeProm();
// //here even though val2 promise is resolved in 5 seconds it will wait for val1 for val1 promise to be resolved in 10 seconds and then it will be logged
// const API_URL = "https://api.github.com/users/BirendraRai2";
// async function handlefetch() {
//   try {
//     const data = await fetch(API_URL);
//     const result = await data.json();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }

//another way
//fetch().then(res=>res.json()).then(res=>console.log(res))
//handlefetch function execution will suspend at line 102 and function execution will resume only after fetch function call has been fully fulfilled whether it is
//resolved or rejected that is a separate issue
//fetch gives you a response object and response object has a body which is a readable stream. to convert it into json we have to do response.json().
//This data.json() is again a promise and when this promise is resolved it gives you a result or value
//the error inside async await can be handled using try and catch block instead of then and catch inside promise
//}
//since handlefetch is a promise .The error inside handlefetch can also be catched using .catch
//handlefetch();
// handlefetch().catch((err) => console.log("err", err));
