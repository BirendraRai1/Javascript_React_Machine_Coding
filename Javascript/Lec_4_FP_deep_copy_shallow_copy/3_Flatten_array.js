// input  -> nested array
let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];
// output -> single level of array with num
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// [4, 5] -> [4,5]
// [6, 7, 8, [9, 10, 11]] -> [6, 7, 8, 9, 10, 11]

function flatten(srcArr) {
  let newArr = [];
  for (let i = 0; i < srcArr.length; i++) {
      if(Array.isArray(srcArr[i])){
        let flattenArr = flatten(srcArr[i])
        newArr = [...newArr,...flattenArr]
      }
      else{
        newArr = [...newArr,srcArr[i]]
      }
  }
  return newArr;
}
// let flattenedArr = flatten(input);
// console.log(flattenedArr);

/**
 * Question  -> Array.protype.flat()  -> flatten fn -> option of levels also
 * */

let flattenOutput = flatten(input);
console.log(flattenOutput);

/**
 * simple deep clone/copy
 * deep copy/clone with nested objects and array HW
 * flatten an array
 * Array.prototype.flat() HW
 * flatten an object
 * */

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   objectArr: [9, { m: 5 }],
//   address: {
//     street: "North 1st street",
//     city: "San Jose",
//     state: "CA",
//     country: "USA",
//     postCodes: {
//       firstBlock: 10,
//       secondBlock: 12,
//       profile: {
//         home: 149,
//         area: "airport road",
//       },
//     },
//   },
// };

// function flattenObject(obj) {
//   let result = {};
//   for (let key in obj) {
//     let elem = obj[key];
//     let isObject = typeof elem;
//     let isArray = Array.isArray(elem);
//     if (isObject == "object" && !isArray) {
//       let temp = flattenObject(obj[key]);
//       for (let j in temp) {
//         result[key + "." + j] = temp[j];
//       }
//     } else {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }
// console.log("flatten object ", flattenObject(person));

// person = {
//   firstName: "John",
//   lastName: "Doe",
//   "address.street": "North 1st street",
//   "address.city": "San Jose",
//   "address.state": "CA",
//   "address.country": "USA",
//   "address.postCodes.firstBlock": 10,
//   "address.postCodes.secondBlock": 12,
// };
