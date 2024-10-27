/**
 * functions are objects in JS
 * Array are Object in JS
 * Object is a  group Key :value pairs
 * */

/*fn definiton*/
// function fn() {
//   // code
//   console.log("Hi I am a fn");
// }

// /*fn behaves as an object*/
// fn.count = 0;
// fn.printCount = function () {
//   //adding a method to function
//   console.log("count is ", this.count); //here fn.printCount is a method don't assume it as a function .So it will take this from the current object
// };

// console.log("count prop", fn.count);
// fn.printCount();
// /********************************/
// console.log(fn); //here we are logging the function
// /*fn call here we execute the code inside the fn defintion */
// fn();
/**
 * fn as an object :-function is an object that implements callabale constructor i.e
 * fn is an object which you can also call
 * Significance :- function are known as first class citizens. It means that function can be treated as normal variables
 *
 * */

/**
 * first thing we can do with variables:-we can assign a variables ref /value to another variable
 * */

// let arr=[10,20,30];
// let arr2=arr; //here variable arr2 holds the refrence of arr
// console.log("arr2",arr2);

/**Function expression*/
// const fnAddress = function () {
//     console.log("Hello i am a fn  expression");
// }
//here also we took the function defination and store the refrence in the fnAddress
// fnAddress();

/**
 * variables: you can pass variable as a parameter
 *            you can pass a fn as a parameter
 * */

function fn(param) {
  console.log("param is ", param); //[Function: param]
  const rValue = param();
  console.log("rValue is ", rValue);
  return "From outer fn";
}
// fn("Hello");
// fn([1, 2, 3, 4]);
// fn({ name: "Jasbir" });
const outerFnRVal = fn(smaller);
console.log(outerFnRVal);
function smaller() {
  console.log(" I am smaller");
  return "hello";
}

/**
 * variables ->variables can be returned
 *          -> fn can also be returned from a function
 * */

// function fn() {
//   console.log(" I am fn I am returning a fn"); //1
//   return function inner() {
//     console.log("Returned from fn"); //2
//   };
// }
// const Rval = fn();
// // // console.log("Rval",Rval);
// // //console.log("Rval is " + Rval);
// console.log("Rval", Rval()); //3

/**
 * functions are object . We can add properties or methods to it
 * functions are object so we can assign them , pass them as  a param , retrun them
 * */

// real();
// // this can cause a bug
//instead of using function statement we can use function expression to solve the below bug
//.when we are using function expression with same name real
//using const or let it will throw error . So always use function expression
// const real = function () { console.log("I am real. Always run me"); }
// const real = function () { console.log("No I am real one "); }
// const real = function () { console.log("You both are wasted"); }

/****************Arrays*********/

/**
 * JS -> array is a collection of anything(Valid JS Datatype)
 *
 * **/

let arr = [
  1,
  1.1,
  true,
  null,
  "Hello",
  [1, 2, 3, 4, 5],
  { name: "Jasbir" },
  function sayhi() {
    console.log(" I am a fn inside an array");
  },
];
// console.log("arr", arr);
// console.log(arr[5][2]);
// console.log(arr[6]["name"]); //arr[6].name
// arr[7]();

/**
 * Arrays are object
 */
for (let key in arr) {
  console.log("key : ", key, "value : ", arr[key]);
}
// console.log(arr[25]); // undefined
// arr[30] = 600;
// console.log("144", arr.length); //31
// arr["Hello"] = 200; //it will not give an error.Because array is internally an object.here key is hello and value is 200
// arr[75] = 800;
// console.log("146", arr.length);bject disguised as an array.key are numbers

/**traverse array*/
// for (let key in arr) {
//     console.log("key : ", key, "value : ", arr[key]);
// }

// for (let key in arr) {
//   console.log("key : ", key, "value : ", arr[key]);
// }
// console.log(arr[25]); // undefined
// arr[30] = 600;
// console.log("144", arr.length); //31
// arr["Hello"] = 200; //it will not give an error.Because array is internally an object.here key is hello and value is 200
// arr[75] = 800;
// console.log("146", arr.length);
// for (let key in arr) {
//     console.log("key : ", key, "value : ", arr[key]);
// }
// length is basically lastnumericidx+1;

/**length -> no Index out of bound error  -> introduces bugs*/
