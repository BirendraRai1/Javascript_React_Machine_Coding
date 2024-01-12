// console.log("Hello");

/**
 * outer scope  : every function has access to it's variables that is in current scope
 * as well as as any variable declared outside
 * */

// var x = 10;
// function fn() {
//   /**
//    * here you are taking the value from the current/local scope in case of x=20*/
//   var x = 20;
//   console.log("c Value of x is ", x);
// }

// fn();

window.varName = "win";

var varName = 10;
var varName;
// /**Here it is defination of function b*/
function b() {
  console.log("in b", varName);
}

function fn() {
  var varName = 20;
  /**Here function b is called*/
  b(); //in b 10
  console.log(varName); //20
}

fn();

/**
 * if you have the variable in the current scope you take from that scope and if it is not present in that scope it will take from outer scope
 * inside function b varName is not present so it will take from outer scope
 * inside the function fn varName is 20
 * Here in global execution context varName is 10
 * */
