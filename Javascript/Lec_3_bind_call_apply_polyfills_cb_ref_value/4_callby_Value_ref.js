// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr;
// arr2.pop();
// arr2 = 10;
// console.log(arr);

// function modifier(a, b) {
//   console.log("9", a, b);
//   a[0] = 10;
//   b[1] = 20;
//   console.log("12", a, b);
// }
// let p = [4, 7, 9];
// let q = [3, 6, 8];
// console.log("17", p, q);
// modifier(p, q);

// console.log("19", p, q);

//  what a reference is -> address -> pointer

// call by value -> call by sharing
//  primitive -> value
// non primitive -> val of the reference

// function modifier(a,b){
// 	a=10
//   b=20
// }
// let p = [4,7,9]
// let q = [3,6,8]
// modifier(p,q)
// console.log(p,q)

/**In JavaScript, when you pass arrays (or objects) to a function, they are passed by 
 * reference. This means that if you modify the contents of the array inside the function, 
 * those changes will be reflected outside the function as well. However, if you try to 
 * reassign the array itself (as you're doing by a = 10 and b = 20), the change won't affect
 *  the original array outside the function.

In your case, you're trying to modify the arrays p and q by assigning new values to a and b
 inside the modifier function. But this reassignment only affects the local copies a and b, 
 not the arrays p and q themselves.
 * *********/

function modifier(a, b) {
  a = 10;
  b = 20;
  console.log(a, b);
}
let p=[4,7,9]
let q = [3,6,8]
modifier(p,q)
