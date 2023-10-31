// console.log("Hello");

/**
 * ways to create object in js
 * 1. object literal
 * 2. Object.create
 * **/

/******1. Object literal**************
 * 1. properties and methods
 * 2. We get capital Object as your prototype (prototype is basically your parent)
 * ***/
// let obj = {
//     name: "Steve",
//     address: {
//         state: "Newyork",
//         city: "Manhatten"
//     },
//     sayHi: function () {
//         console.log(`${this.name} say's Hi`);
//     }
// };
// console.log("Object", obj);

/**
 * **************************How Inbuilt object works ***************
 * 1. array is children of capital Array(Object/class)
 * 2. function is children of capital Function
 * 3. object is children of capital Object
 * For primitive we have temporary parent
 * *  num -> Number
 * *  str -> String
 * *  boolean -> Boolean
 * *  null and undefined -> no parent
 *  In case of primitive we are not able to see its parent
 * * etc
 *     whenever you want to access any method or property
 *      then that  primitive is typecased as a
 *      children of there respective parent class and
 *      then that method is applied on that primitive
 *      you are returned the answer. For eg when we want
 *      to get str.charAt method .Here in the below primitive
 *       parent of str is String .This feature is known as autoboxing or typecasting
 *
 * */

/**** primitives */
// let str = "hi i am str";
// console.log(str);
// str.charAt(0);
// console.log(String.prototype); //charAt method is present on capital String and we have not defined String

/****
 * hirerachy : Inbuilt object
 *    null-> Object //null is at the topmost hierarchy
 *              Array->arr
 *              Function -> function
 *              String
 *              Number
 *              Boolean
 *              Symbol
 * who is at the topmost Hierarchy ? answer is null
 *
 * */

// let arr = [];
// console.log(arr);
// console.log(new Number(10)); //Number is children of object

/**********2.Object create******/

/****1. Here in the below you can create an object without any parent**/
// let obj2 = Object.create(null);
// obj2.name = "fake name";
// console.log(obj2);
/****
 * Who is parent of obj2??
 * obj2 parent is no one since we have created obj2 using null
 * ******/
/***
 * Inheritance :
 *  1. unidirectional flow   of data from child to parent.Its top down flow of data
 *        a. if you don not have a property/method then you have to go to your prototype chain
 *         b. if you have that you will use your property/method
 *          c.Parent will not go to their children. Children will have to go to their parent
 * **/

/********2. creating an object from another object*/
let obj = {
  name: "Steve",
  address: {
    state: "Newyork",
    city: "Manhatten",
  },
  sayHi: function () {
    console.log(`${this.name} say's Hi`);
  },
};

let obj2 = Object.create(obj); //Here it means that create an object obj2 whose parent is obj
// console.log(obj2);
/**In line number 102 obj.name property has been overriden*/
// obj2.name = "symphony";
obj2.lastname = "rogers";
// console.log("1.", obj2.name, " ", obj2.lastname, obj2.address);
// console.log("2. ", obj.lastname);//here obj does not have lastname .So it will go to its parent Object till it reaches end

// console.log(obj.isPrototypeOf(obj2)); //true //It means is obj parent of obj2??
// console.log(obj2.isPrototypeOf(obj)); // false//It means is obj2 parent of obj??

let obj3 = Object.create(obj2);
obj3.friends = ["tony", "bruce"];

// console.log(obj3);
/**when you loop on an object using for in loop it will iterate over all the property of the object ,
 *and its inherited property
 */ //
// for (let key in obj3) {
//   console.log("Keys are ", key);
// }

/********for in loop for your own poperties******/
// 1st way .
for (let key in obj3) {
  let isMyKey = obj3.hasOwnProperty(key);
  if (isMyKey) {
    console.log("Keys are ", key);
  }
}

//2.
/**
 * second way is do object.keys and then normal loop to get all the keys of particular object.
 * It gives you an array of all keys
 * **/
// let keys = Object.keys(obj3); //Object.keys gives your all own key

// for (let i = 0; i < keys.length; i++) {
//   console.log(i + " " + keys[i]);
// }
//Object.values(obj3) gives you all the values
// let values = Object.values(obj3);
// for (let i = 0; i < values.length; i++) {
//   console.log(i + "values " + values[i]);
// }

/*Dot Notation in object is useful when you know the property ahead of time.
 *You simply do object.key to read/modify an existing property or to add a new property.
 *Bracket Notation is useful when you want to dynamically access a property
 ********/
