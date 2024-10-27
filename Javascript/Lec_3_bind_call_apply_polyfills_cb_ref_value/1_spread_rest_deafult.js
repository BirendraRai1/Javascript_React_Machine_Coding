/**
 * default parameter
 * **/

// function fn(param1, param2, param3 = "default") {
//   console.log("Hi params are ", param1, param2, param3);
// }

// fn("Hi", "Hello", "Hola");
// fn("Hi", "Hello");

/**
// 
 * spread operator : copies value,ref from one array or object to another only for first level
 * 
 * */

// assignment operator -> reference remain same
//let arr = [1, 2, 3, 4, 5];

// arr2 and arr has the same reference
// let arr2 = arr;
// arr2.pop();
// arr2.push(100);
// arr2[2] = 200;
// console.log("contest arr", arr);

//let arr = [1, 2, [3, 4], 4, 5];

// // spread copies value or refrence from one array or object to another array or object only for the first level
// let arr2 = [...arr];
// arr2.pop();
// arr2.push(100);
// console.log("arr is", arr, "arr2 is", arr2);
// let arr = [1, 2, [3, 4], 4, 5];
// let arr2 = [...arr];
// //[value, value, ref, value, value];
// arr2[2][0] = 200;
// Since arr2[2] refers to the same nested array [3, 4] from arr, modifying arr2[2][0]
// (the first element of the sub-array) also affects arr[2]. So both arr[2] and arr2[2] 
// will become [200, 4].
//arr2[2] = 100;
//console.log("orginal arr", arr, "updated array", arr2);

// let a=10;
// //copied value -> primitive types
// let b=a;

// let arr=[1,2,3,4];
// you get the ref
// let arr2=arr;

// let arr = [1, 2, [3, 4], 4, 5];
// [value,value,ref,value,value]

// let arr2 = [...arr];

/****
 * rest -> It is used as a parameter of function .
 *  used  to collect remaining parameters numbers of params .
 * ***/

function fn(param1, ...param2) {
  console.log(" params are ", param1);
  console.log("Rest paramateres", param2);
}

fn("Hi", "Hello");
fn("Hi", "Hello", "Hola");
