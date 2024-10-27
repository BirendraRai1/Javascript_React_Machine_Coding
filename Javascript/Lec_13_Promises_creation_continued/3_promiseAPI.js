// function promSetTimout(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve("Hey then")
//         }, delay)
//     })
// }

//We have to build this promise api

// promSetTimout(1000).then((data)=>{console.log(data)})
// A promise has a constructor function that accepts a callback function as input which we can call as executorFunction
const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

// Here we are using function constructor and this refers to the current object
function CustomPromise(executorFn) {
  //    1. add required properties and methods
  // promise does not expose these below properties from 20 to 23 so we are using let .Promise exposes only then ,catch and finally
  let state = PENDING;
  let value = undefined;
  let scbArr = []; //we are adding array because there can be n number of then attached to it
  let fcbArr = []; //we are adding array because there can be n number of catch attached to it

  //Variables that are defined inside the function using let, var, or const remain local 
  //to the function's scope. These variables are not attached to the new object and are 
  //inaccessible from the outside when the function is called with new keyword

  // 2 attach resolve and reject
  const resolve = (value) => {
    if (state != PENDING) return;
    state = RESOLVED;
    value = value;
    console.log("value in resolve is",value)
    // scb
    console.log("scbArr is ", scbArr);
    scbArr.forEach((cbs) => {
      console.log("inside the scbArr value is",value)
      cbs(value);
    });
  };
  const reject = (err) => {
    if (state != PENDING) return;
    state = REJECTED;
    value = err;
    // fcb
    fcbArr.forEach((cbs) => {
      cbs(value);
    });
  };
  // then and catch will be attached to your object
  this.then = function (cb) {
    //for function constructor this refers to current object
    if (state === RESOLVED) {
      console.log("line 48 resolved");
      cb();
    } else {
      console.log("entered line 51", scbArr);
      console.log("cb is",cb)
      scbArr.push(cb);
    }
  };
  this.catch = function (cb) {
    if (state === REJECTED) {
      cb(value);
    } else {
      fcbArr.push(cb);
    }
  };
  this.finally = function (cb) {
    console.log("finally came here", cb);
    if (state === RESOLVED || state === REJECTED) {
      cb(value);
    }
  };
  //  3. call the executor fn
  executorFn(resolve, reject);
}

const executorFn = (resolve, reject) => {
  //   cb based fn
  setTimeout(function () {
    resolve("Hey then");
  }, 5000);

  setTimeout(function(){
    reject("I made an error")
  },6000)
};

// usage of your custom *****************
const myPromise = new CustomPromise(executorFn);
console.log("myPromise is ", myPromise);
myPromise.then((data) => {
  console.log("I am the second then");
});

const cb = (data) => {
  console.log("75", data);
};

myPromise.then(cb);

myPromise.catch((err) => {
  console.log("90", err);
});

myPromise.finally((data) => {
  console.log("inside finally",data);
});

// const promise = new Promise(executorFn);
// console.log(promise);
// promise.then((data) => {console.log(data)});
// queueMicrotask();, Mutation observer
