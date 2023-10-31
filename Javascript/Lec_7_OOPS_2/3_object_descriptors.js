// Metadata is data about data .In JS we call it as object descriptors
/**Below are few ways to describe an object its value,writable and enumerable***/
// DATA  -> property
// value :- value of that property
// writable :-can you change it??
//   it is iteratble using for in loop
// enumerable :-can you iterate over it??

let obj = {
  name: "Jasbir",
};

Object.defineProperty(obj, "test", {
  value: "fail",
  enumerable: false,
});
//Here test is the key i want to add test value will be fail
// console.log(obj);
console.log(obj.test);
for (let key in obj) {
  console.log("in loop", key);
}
