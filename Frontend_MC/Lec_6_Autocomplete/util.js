function debounce(fn, delay = 500) {
  // intial
  let timerId;
  return function (...args) {
    //grumpy
    if (timerId) {
      console.log("I am reseting you now wait again from the start");
      clearTimeout(timerId);
    }
    // they want to call the fn after a delay
    timerId = setTimeout(function () {
      fn(...args);
    }, delay);
  };
}
// -> 0 -> 3
//

function myFN(args) {
  console.log("Please call me", args);
}

const dbFN = debounce(myFN, 3000);
dbFN(5);
setTimeout(function () {
  dbFN(3);
  setTimeout(function () {
    dbFN(2);
    setTimeout(function () {
      dbFN(1);
    }, 1000);
  }, 1000);
}, 1000);
