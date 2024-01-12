//Q1_a
// function outer() {
//   let arrFn = [];
//   for (var i = 0; i < 3; i++) {
//     arrFn.push(function fn() {
//       console.log(i);
//     });
//   }
//   return arrFn;
// }
// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

// Q1_1
// function outer() {
//   let arrFn = [];
//   for (var i = 0; i < 3; i++) {
//     arrFn.push(function fn() {
//       i++;
//       console.log(i);
//     });
//   }
//   return arrFn;
// }
// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

//q-1-2
/**
 * here fn is taking value from closure thats why i=3
 * */
// function outer() {
//   /**
//    * arrfn refers to block scope here it refers to two curly braces of functions
//    * */
//   let arrFn = [];
//   let i = 0;
//   for (i = 0; i < 3; i++) {
//     arrFn.push(function fn() {
//       console.log(i);
//     });
//   }
//   return arrFn;
// }
// let arrFn = outer();
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

/**
 * q1-3 : fn is getting diffrent values of i because here
 * block scope is different foe every iteration
//  */
function outer() {
  /**
   * here arrfns block scope refer to functions
   * */
  let arrFn = [];
  for (let i = 0; i < 3; i++) {
    arrFn.push(function fn() {
      console.log(i);
    });
  }
  return arrFn;
}
let arrFn = outer();
arrFn[0]();
arrFn[1]();
arrFn[2]();
