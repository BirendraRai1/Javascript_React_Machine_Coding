/**
 * Closure : inner fn forms closure over outer fn's variable and it's variables are present
 * even if outer fn is removed from the stack .
 *  When closure is formed ?ans:-when a inner fn is hoisted it form closure over outer variable
 *  Closure is always formed on variable not on value
 * */
/*******************Q1 based on closure************************/
function outerFunction() {
  let count = 0;
  return function innerFunction() {
    count++;
    return count;
  };
}
const innerFunc = outerFunction();
console.log(innerFunc());
console.log(innerFunc());
/*****
 * output 1 2
 * ****/

/**************Q2*************************/

// function innerFunction() {
//   count++;
//   return count;
// }

// function outerFunction() {
//   let count = 0;
//   return innerFunction;
// }
// const innerFunc = outerFunction();
// console.log(innerFunc());
// console.log(innerFunc());
/***
 * output ReferenceError: count is not defined
 * ***/
/****
 * So In order to use closure the outer variable you want to use should be in the lexical scope
 * Closure is always formed on variable not on value
 * when a function is hoisted at that point of time it forms closure over outer variables
 * ****/
/******************Q3 based on closure*************************/
// function createCounter(init, delta) {
//   function count() {
//     init = init + delta;
//     return init;
//   }
//   return count;
// }
// let c1 = createCounter(10, 5); // c1 -> count (init=10, delta =5 )
// let c2 = createCounter(5, 2);

// console.log(c1()); //c1 -> count (init =15, delta =5);
// console.log(c2());
// console.log(c1());
// console.log(c2());

/***
 * Nested closure : you will get access to outer variable even if the
 * outer function is not your direct parent
 * */
// let iamINGEC = 200;
// function getFirstName(firstName) {
//   console.log("I have got your first Name");
//   return function getLastName(lastName) {
//     console.log("I have got Your last Name");
//     return function greeter() {
//       console.log(`Hi I am ${firstName} ${lastName}`); // closure
//       console.log("Hi GEC", iamINGEC); // LExical scope
//     };
//   };
// }

// const fnNameRtrn = getFirstName("Jasbir");
// console.log("fnNameRtrn", fnNameRtrn); // getLastname

// const lnNameRtrn = fnNameRtrn("Singh");
// console.log("lnNameRtrn", lnNameRtrn); // greeter

//getFirstName("Jasbir")("Singh")();
//or
//lnNameRtrn();

/**
 * Every code is executed in an Execution Contest.And your Execution Contest gives following things
 * 1. this ,
 * 2. local fn and var ,
 * 3. global,In case of browser it is window obj
 * 4. lexical scope
 * 5. closure till GEC
 *
 * */

/***
 * Application of closures
 * 1.  currying : taking one input at a time and you use the input later
 * 2. asynchrounous code cannnot run without closure
 * 3.
 * **/

/*get all the inputs at once .We can execute the code .This is one way .It has its own use case*/
// function greeter(firstName, lastName) {
//   console.log(`Hi I am ${firstName} ${lastName}`); // closure
// }
// greeter("Jasbir", "singh");
/***
 * When a user is using an application you donot want to fill them a lot of inputs to use that user application
 * we can take a few of inputs at one page ,few of the inputs at second page,few of the inputs at the third page
 * and at the fourth page show the output at the fourth page.The below example describes it.This is known as function currying
 *
 * ****/

/************Q4.Based on currying*****************************/
function getFirstName(firstName) {
  console.log("I have got your first Name");
  return function getLastName(lastName) {
    console.log("I have got Your last Name");
    return function greeter() {
      console.log(`Hi I am ${firstName} ${lastName}`); // closure
    };
  };
}

const getLastName = getFirstName("Jasbir");
console.log("1st Task in between");
const greeter = getLastName("Singh");
console.log("2nd Task in between");
greeter();

/*************Q5.Based on setTimeout********************/
let a = 100;

console.log("Before");
function cb() {
  console.log("I will explode", a);
}
setTimeout(cb, 2000);
console.log("After");

/**GEC */
/**should a exist -> no*/
