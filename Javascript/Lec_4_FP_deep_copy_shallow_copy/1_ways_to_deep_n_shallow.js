// console.log("Hello");

// let arr = [1, 2, 3, 4, [10, 12], 5, 6];
// // assigning arr to copiedArr
// let copiedArr = arr;
// // console.log(copiedArr);
// copiedArr[2] = 100;
// console.log("arr", arr, copiedArr);
/***
 * array , object -> two types of values -> primitves-> values , non primitives -> reference
 * Assignment ->
 *  values ->  are not copied,
 * reference -> they are also not copied
 *
 * */

/*****
 *A shallow copy of an arrays or object is one where they both have
 *the same reference in memory. That means that if you change the shallow copy,
 *it may change the original copy too
 * shallow copy :
 *  value -> values will be copied and they have diff mem
 * references -> new references will be created but the values inside the reference will be pointing towards same location
 * */

/**spread*/
// let arr = [1, 2, 3, 4, [10, 12], 5, 6];
// let spreadArray = [...arr];
// spreadArray[2] = 100;
// //spreadArray[4] = 200;
// spreadArray[4][1] = 300;
// console.log("outputs ", spreadArray, arr);

/**Object.assign**/
// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   address: {
//     street: "North 1st street",
//     city: "San Jose",
//     state: "CA",
//     country: "USA",
//   },
// };

// let obj1 = {
//   hobbies: "criket",
//   movie: "govinda",
// };

////The Object.assign() method is used to copy the values and properties from one or more source
//objects to a target object
//target: It is the target object to which values and properties have to be copied.
//sources: It is the source object from which values and properties have to be copied.
//Object.assign(target,source)

// let copiedObject = Object.assign(obj1, person);
// console.log("copiedObject before assigning ", copiedObject);
// copiedObject.lastName = "Odinson";
// copiedObject.address.street = "south 1st street";
// console.log("person", person);
// console.log("copiedObject", copiedObject);
// let copiedObject1 = { ...person };
// console.log("after shallow copy ", copiedObject1);

/**
 * Deep Copy : JSON.stringify and JSON.parse
 *
 * */

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   address: {
//     street: "North 1st street",
//     city: "San Jose",
//     state: "CA",
//     country: "USA",
//   },
// };
// // // // convert obj to string
// let stringSyntaxOfobject = JSON.stringify(person);
// console.log(typeof stringSyntaxOfobject, stringSyntaxOfobject);
// /**deep copy -> object like string*/
//a deep copy shares no references with its source object, any changes made to the deep copy do not affect the source object.

// let deepClonedObj = JSON.parse(stringSyntaxOfobject);
// deepClonedObj.lastName = "Odinson";
// deepClonedObj.address.street = "south 1st street";
// console.log("person", person);
// console.log("deepClonedObj", deepClonedObj);

let arr = [1, 2, 3, 4, [10, 12], 5, 6];
let stringArr = JSON.stringify(arr);
const deepArr = JSON.parse(stringArr);
deepArr[2] = 100;
deepArr[4][1] = 300;
console.log("outputs ", deepArr, arr);

//  JSON.stringify -> deep copy
// JSON.parse ->
//  BottleNeck -> you write your own deep clone

/*****
 * Shallow copy creates a new object with references
 * to the same memory locations as the original object,
 * while deep copy creates a new object with new memory locations for all of its properties
 * and nested objects or arrays
 *
 * *******/
