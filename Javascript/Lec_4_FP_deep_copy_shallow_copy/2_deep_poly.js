// This object  -> copy of it
//polyfill of deep copy of an object
let person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street: "North 1st street",
    city: "San Jose",
    state: "CA",
    country: "USA",
    hobbies: ["cricket", "basketball"],
  },
  friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }],
};

function deepClone(obj) {
  if (obj == null || typeof obj != "object") return obj;
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }
  const clonedObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}

let deeplyClonedObj = deepClone(person);
deeplyClonedObj.friends[2] = "Odinson";
deeplyClonedObj.address.street = "south 1st street";
console.log("person", person);
console.log("deeplyClonedObject", deeplyClonedObj);

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// };

// let arr = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];

// //polyfill of deep copy of an array
// function deepCopyArray(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let isArray = Array.isArray(arr[i]);
//     if (isArray) {
//       let clonedArr = deepCopyArray(arr[i]);
//       newArr.push(clonedArr);
//     } else newArr.push(arr[i]);
//   }
//   return newArr;
// }
// let deepCopy = deepCopyArray(arr);
// deepCopy[3][1] = 100;
// console.log("arr is", arr, "deepCopy is", deepCopy);
