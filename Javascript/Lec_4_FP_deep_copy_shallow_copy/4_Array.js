/** array is an object */

let arr = [1, 2, 3, 4, 5, 6, 7, 800];
// //  it gives you the copy
// // params -> starting index , ending index
// // it copies the elem from  si to ei - 1
// let slicedArr = arr.slice(2, 4);
// // // modifies the original array
// // // params -> starting index , delete count
// console.log("slicedArr: ", slicedArr);
// let splicedArr = arr.splice(2, 3);
// console.log("splicedArr: ", arr, splicedArr);

/**concat*/
// It concats a two array without chainging the original array

// let concatArr = arr.concat([100, 200, 300]);
// console.log("concatArr: ", concatArr);
// console.log("arr", arr);

// split and join
// split splits a string into an array of string
// with the use of a delimiter
// let str = "Hi i am google".trim();
// let arrStr = str.split(" ");
// // joins the array of string into  string on the basis of delimiter
// let joinedStr = arrStr.join("+");
// console.log("joinedStr", joinedStr);

/*difference between splice and slice
*slice returns a piece of the array but it doesn't affect 
*the original array. splice changes the original array by removing, 
replacing, or adding values and returns the affected values
********/

let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];
let newArr = input.slice(1, 4);
console.log("newArr is", newArr);
newArr[2][1] = 100;
console.log("modified new arr is", newArr);
console.log("input arr is", input);
let splicedArr = input.splice(1, 3);
splicedArr[2][1] = 500;
console.log("spliced Arr is", splicedArr);
console.log("after spliced input arr is", input);
