/****3rd way to create an object using function constructor .It was available before es6*******************/

// function Person(name, age) {
//   console.log("this inside ", this); //this means here when we are creating new object using new keyword your Person creates an empty object and refer to that an empty object
//   this.name = name;
//   this.age = age;
//   this.sayHi = function () {
//     console.log(`I am ${this.name} and ${this.age} years old`);
//   };
// }

// const jasbir = new Person("Jasbir", 26); //new is basically that i am creating an object using function class
// let cap = new Person("Cap", 38); //new gives an empty object .It fills the empty object with given properties and gives you
// console.log(jasbir);
// //All the properties that were valid during creation of object using object literal and object create are also applied here
// let keys = Object.keys(jasbir);
// for (let i in keys) {
//   console.log(i + " " + keys[i]);
// }
// let values = Object.values(jasbir);
// for (let i in values) {
//   console.log(i + " values " + values[i]);
// }
// jasbir.sayHi();
// cap.sayHi();

/******4th way of creating object using class.It was available after es6*********/
//  Inside the class it is always in strict mode
//It is a syntax sugar of the above method
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHI() {
    console.log(`I am ${this.name} and ${this.age} years old`);
  }
}

class SuperHuman extends Person {
  constructor(name, age, lastname) {
    super(name, age);
    this.lastname = lastname;
  }
  sayHI() {
    console.log(`I am super Human and ${this.name} years old`);
  }
}

const superOne = new SuperHuman("Jasbir", 25, "Singh");
for (let key in superOne) {
  console.log("keys are ", key);
}
console.log(superOne);

const jasbir = new Person("Jasbir", 26);
let cap = new Person("Cap", 38);

// jasbir.sayHI();
// cap.sayHI();
// console.log(jasbir);

/***
 * significance of inheritance is code sharing , saving memory
 * what Prototype is ??Ans :- In JS we create object from an object and that object is your parent or prototype and that chain goes on
 * what is Prototypal Inheritance ??Ans:- you inherit the properties from a parent object/ prototype and that inheritance is known as the prototypal inheritance
 *
 *
 * */
//let arr = [];
// what is Prototype chain??:Ans-the chain from the current object to null is known as prototype chain
//console.log(arr.__proto__.__proto__.__proto__);
