// console.log("Hello");
// native object and a host object

// Enviornment ->
//  host object ->browser//  window,document,localstorage
// host object -> nodejs -> global, os ,process

// JS -> given by language
// native object -> Date, JSON,Object
// var firstName = "Biru"
// let cap = {
//   // property
//   firstName: "Steve",
//   // method
//   sayHi: function () {
//     function abc(){
//       console.log("hello from ",this.firstName)
//     }
//     abc()
//     console.log("Hi from ", this.firstName);
//   },
// };

// cap.sayHi();
// let sayHiAdd = cap.sayHi; //here we are assigning the function cap.sayHi to the sayHiAdd
//var firstName = "loki";
// sayHiAdd(); //here we are calling the function sayHiAdd
// function sayHello() {
//   console.log("hi from sayHello ", this.firstName);
// }
// sayHello();
// console.log("window.firstName", window.firstName);
// //global area
// //gec -> var will go to global object
// let firstVar = "created using let";
// var secondVar = "created using var";

// console.log("first", firstVar);
// console.log("second", window.secondVar);
// console.log("Hello from ", this);

// rules for this
// GEC -> this -> window object
// EC is created with -> method call -> this will be that object
// EC is created with -> function call -> this will be that window

/********************Question 1******************************/
// let cap = {
//   // property
//   firstName: "Steve",
//   // method
//   sayHi: ()=>{
//     console.log("Hi from ", this.firstName);
//   }
// };
// console.log(cap.sayHi())

/**********************Question 2 ******************/

// let cap = {
//   firstName: "Steve",
//   sayHi: function (param) {
//     console.log("47", this.firstName);
//     const iAmInner = function (param) {
//       console.log("49", this.firstName);
//     };
//     // EC by this kind of call -> window
//     iAmInner(20); //since iAmInner is a function so it will take this from window
//   }
// };

// // // EC by this -> ?? -> cap
//cap.sayHi(10);

// iamInner -> this =window, param=20
// cap.saHI -> param=10, this = cap
// GEC
/*****************Question3 *******************/
// // var -> GEC
// let cap = {
//   firstName: "Steve",
//   sayHi: function () {
//     console.log("53", this.firstName);
//     // arrow function->  does not have it's own this. I am going to cheat it from outside
//     const iAmInner = () => {
//       console.log("55", this.firstName);
//     };
//     iAmInner();
//   },
// };
// cap.sayHi();

// rules for this
// GEC -> this -> window object
// EC is created with -> method call -> this will be that current object
// EC is created with -> function call -> this will be that window
// Arrow function doesn't bother about above rules -> it takes this from outside

// GEC -> window -> window.firstName
// var firstName = "thanos";
// let cap = {
//   firstName: "Steve",
//   sayHi: function () {
//     console.log("91", this.firstName);
//     // arrow ->  does not have it's own this. I am going to cheat it from outside
//     const subInner = () => {
//       console.log("94", this.firstName);
//       const iAmInner = () => {
//         console.log("95", this.firstName);
//       };
//       iAmInner();
//     };
//     subInner();
//   },
// };
// cap.sayHi();

// windows
// gec {
//     sayhi=>(){
//         iamInner=>(){

//         }
//     }
// }

// opting into strict mode  -> many difference in which how js works

//What will happen when this is present inside async method/callback
// var value = 35
// const obj = {
//   value: 42,
//   regularMethod: ()=> {
//     setTimeout(()=> {
//       console.log("Regular method's this", this.value); 
//     }, 1000);
//     //The regularMethod being an arrow function makes it inherit this from the global scope (or its defining scope), which refers to window in this case.
//     //The setTimeout arrow function also inherits this this, so this.value refers to window.value, which is 35.
//     //If regularMethod were a regular function, it would have this bound to obj1, and this.value would be 42 inside setTimeout.
//   },

// };
// obj.regularMethod();

// //output
// //Regular method's this 35

// var value = 35
// const obj = {
//   value: 42,
//   regularMethod: function(){
//     setTimeout(()=> {
//       console.log("Regular method's this", this.value); 
//     }, 1000);
//     //The regularMethod being an arrow function makes it inherit this from the global scope (or its defining scope), which refers to window in this case.
//     //The setTimeout arrow function also inherits this this, so this.value refers to window.value, which is 35.
//     //If regularMethod were a regular function, it would have this bound to obj1, and this.value would be 42 inside setTimeout.
//   },
// };
// obj.regularMethod();
////output
////Regular method's this 42


// var value = 35
// const obj = {
//   value: 42,
//   regularMethod: function() {
//     setTimeout(function() {
//       console.log("Regular method's this", this.value); 
//     }, 1000);
    
//   },

// };
// obj.regularMethod();
////output
////Regular method's this 35


// var value = 35
// const obj = {
//   value: 42,
//   regularMethod:()=> {
//     setTimeout(function() {
//       console.log("Regular method's this", this.value); 
//     }, 1000);
//     ////In this case, since setTimeout uses a regular function, this refers to the global object, and the value it accesses is window.value, which is 35
//   },

// };
// obj.regularMethod();
////output
////Regular method's this 35

// let a = 10;
// let obj2 = {
//   a: 1,
//   print: function () {
//     function innerPart() {
//       console.log("a ", this.a);
//     }
//     innerPart();
//   },
// };
// console.log(obj2.print());
// //in function call this takes from window object and here value of a in window is undefined because let is block scope a undefined

// var c = 10;
// let obj = {
//   a: 1,
//   print: function () {
//     function innerPart() {
//       console.log("c ", this.c);
//     }
//     innerPart();
//   },
// };
// console.log(obj2.print());

// //in function call this takes from window object so here output is c 10

// const obj = {
//   value: 42,
//   regularMethod: function () {
//     //At this level your this will point to obj which is correct that is if we console.log("this.value") it will point to 42 because you are calling method with respect to an object
//     //but now with setTimeout you are having an async method that is setTimeout is an asynchronous function and the function inside the settimeout is a callback function
//     setTimeout(function () {
//       console.log("Regular method's this", this.value); //ideally here this is going to point to undefined incase of strict mode or window in normal mode
//     }, 1000);
//     //very important point async callback get executed with respect to global object in case of non-strict and undefined in case of strict
//   },
//   arrowMethod: function () {
//     setTimeout(() => {
//       console.log("Arrow method's this", this.value);
//     }, 1000);
//   },
// };
// obj.regularMethod();
// obj.arrowMethod(); //The arrow function callback inside asynchronous setTimeout is called inside the arrowmethod method so it takes from this here

// const obj5 = {
//   value: 42,
//   regularMethod: function () {
//     setTimeout(function () {
//       console.log("Regular method's this", this.value);
//     }, 1000);
//   },
//   arrowMethod: setTimeout(() => {
//     console.log("Arrow method's this", this.value);
//   }, 1000),
// };
//output
//Arrow method's this undefined

// let obj2 = {
//   a: 1,
//   print: function () {
//     let innerPart = () => {
//       console.log(" a", this.a);
//     };
//     innerPart();
//   },
// };
// obj2.print();
//Explanation :At the time of creation only arrow function will decide with whom i am getting created
//output
//a 1

var a=20
let obj2 = {
  a: 1,
  print: ()=>{
    console.log("a is",a)
  },
};
obj2.print();

