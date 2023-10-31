/*****with setTimeout we have a method attached to it known as clearTimeout
 * clearTimeout basically cancels your setTimeout .Every time you calls the setTimeout it gives you the id
 * *
 * Timers are not part of JavaScript .They are part of webApi
 * ***/
/***********Question******************/
// console.log("Before");
// function cb() {
//   console.log("Settimouts cb has been called");
// }
// const timerID = setTimeout(cb, 3000);

// function canceller() {
//   console.log("Cancelling the timeout");
//   clearTimeout(timerID);
// }
// setTimeout(canceller, 2000);
// console.log("AFter");
/*************************************/

/************setInterval, clearInterval*********/
/****
 * setInterval :-It will execute its callback after certain interval .SetInterval is also asynchronous code
 * *****/
/*********Question*********/
// console.log("Before");
// function cb() {
//   //it is time spent from 1/1/1970 .It is in milliseconds
//   console.log("Time stamp is ", Date.now());
// }
// setInterval(cb, 1000);
// console.log("After");

/************Question****************/
console.log("Before");
function cb() {
  console.log("Interval called ");
}
const timerId = setInterval(cb, 1000);
/**
 * how timerId survives even after the call stack is empty.
 * The timerId is outside the callback function cb and the
 * cancelInterval that why it survives due to formation of closure
 * You cannot do your asynchronous programming without closures
 * **/
function cancelInterval() {
  console.timeEnd();
  console.log("cancelling the interval timer");
  clearInterval(timerId);
}
console.time();
setTimeout(cancelInterval, 3000);
console.log("after");

// Web API                      console-> before
//    cb -> SETINTERVAL : 1             after
//  cancelcb->   setTimeout  :3        Interval called
//    Interval called
// cancelcb
// callstack
// cancelcb, cb
// queue
//setInterval has a setTimeout built in .setInterval is basically an infinite settimeout
//  callBack of setTimout has higher precedence then callback of setInterval
