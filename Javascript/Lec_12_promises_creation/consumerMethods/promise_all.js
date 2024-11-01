// const fs = require("fs");

// const promise = fs.promises.readFile("f1.txt");
// const promise2 = fs.promises.readFile("f11.txt");

//when you are doing multiple task and you only want to get the answer when all the task are done
//In that case you can use promise.all.Here we take all the promises in the form of an array.
//Even if one promise fails the whole promise is rejected
// const combinedpromise = Promise.all([promise, promise2]);

// combinedpromise.then(function (resultArr) {
//   console.log("resultArr is",resultArr);
// });
/**************Q1****************************/
// const promise1 = Promise.resolve(1);
// const promise2 = Promise.resolve(2);
// const promise3 = Promise.resolve(3);
// const promise4 = Promise.resolve(4);

// const promiseAll = async () => {
//   console.log("hello");
//   const group1 = await Promise.all([promise1, promise2]);
//   console.log("Here", group1);
//   const group2 = await Promise.all([promise3, promise4]);

//   console.log("3", group2);
//   return [group1, group2];
// };

// promiseAll()
//   .then(function (data) {
//     console.log("inside then ", data);
//   })
//   .catch(function (error) {
//     console.log("inside catch", error);
//   });

/******************Q2************************/
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject(3);
const promise4 = Promise.reject(4);

const promiseAll = async () => {
  console.log("hello");
  const group1 = await Promise.all([promise1, promise2]);
  console.log("Here", group1);
  const group2 = await Promise.all([promise3, promise4]);

  console.log("3", group2);
  return [group1, group2];
};

promiseAll()
  .then(function (data) {
    console.log("inside then ", data);
  })
  .catch(function (error) {
    console.log("inside catch", error);
  });
/****************Q3*************************/
// const promise1 = Promise.resolve(1);
// const promise2 = Promise.reject(2);
// const promise3 = Promise.reject(3);
// const promise4 = Promise.reject(4);

// const promiseAll = async () => {
//   console.log("hello");
//   const group1 = await Promise.all([promise1, promise2]);
//   console.log("Here", group1);
//   const group2 = await Promise.all([promise3, promise4]);

//   console.log("3", group2);
//   return [group1, group2];
// };

// promiseAll()
//   .then(function (data) {
//     console.log("inside then ", data);
//   })
//   .catch(function (error) {
//     console.log("inside catch", error);
//   });
/********************Q4*******************************/
// const promise1 = Promise.resolve(1);
// const promise2 = Promise.reject(2);
// const promise3 = Promise.reject(3);
// const promise4 = Promise.reject(4);
// // // resolve an reject
// const promiseAll = async () => {
//   console.log("1");
//   const group1 = await Promise.any([promise1, promise2]);
//   console.log("2", group1);
//   const group2 = await Promise.any([promise3, promise4]);

//   console.log("3", group2);
//   return [group1, group2];
// };
// promiseAll()
//   .then(function (data) {
//     console.log("inside then ", data);
//   })
//   .catch(function (error) {
//     console.log("inside catch", error);
//   });
