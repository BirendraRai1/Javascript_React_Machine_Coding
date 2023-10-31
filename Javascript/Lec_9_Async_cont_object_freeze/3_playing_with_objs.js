// let config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     }
// }

/**
 * mutation/changes we can do on object ->
 * 1. For reassignment we can control using const,
 * 2. You cannot create a property .It can be done using object.preventExtension
 * 4. You cannot remove and create .It can be done using Object.seal
 * 3. You cannot create , update , delete .It can be done using Object.freeze
 * **/
// config=10;
// console.log(config);

// config.tempServer = "127.0.0.18";
// delete config.database.pwd;
// config.appName = "interviewbit.com";
// console.log(config);

/*************The problem of Reassignment can be controlled using const variable****/
/***with const only the address of object is freezed but not it's properties**/
// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     }
// }

// config = 10;
// console.log(config);

// config.tempServer = "127.0.0.18";
// delete config.database.pwd;
// config.appName = "interviewbit.com";
// console.log(config);

/***************************
 * new property should not  be added on the first level .
 * It can be done using Object.preventExtensions.
 * This propert works only on the first level.
 * Update and delete property works even after using object.preventExtensions

 * **************************/
const config = {
  appName: "scaler.com",
  database: {
    host: "127.0.0.1",
    name: "mainDb",
    user: "root",
    pwd: "admin",
  },
  extra: 10,
};
console.log("config is ", config);
let notExtendableObj = Object.preventExtensions(config);
//notExtendableObj.database = Object.preventExtensions(notExtendableObj.database);
notExtendableObj.tempServer = "127.0.0.18";
notExtendableObj.database.newpwd = "fake";
// // notExtendableObj.appName = "interviewbit.com";
// // delete notExtendableObj.extra;
console.log(config);
// console.log(notExtendableObj);

/*******
 * Object.seal:-It also works on the first level.You can update but not delete / add
 *
 * **/
// const config = {
//     appName: "scaler.com",
//     database: {
//         host: "127.0.0.1",
//         name: "mainDb",
//         user: "root",
//         pwd: "admin"
//     },
//     extra: 10
// }
// let notExtendableObj = Object.seal(config);
// notExtendableObj.database = Object.seal(notExtendableObj.database);
// notExtendableObj.tempServer = "127.0.0.18";
// notExtendableObj.database.newpwd = "fake";
// delete notExtendableObj.extra;
// notExtendableObj.appName = "interviewbit.com";
// // // console.log(config);
// console.log(notExtendableObj);

/*******
 * Object.freeze:-In object.freeze you cannot update,delete or add.It also works on the first level
 *
 * **/

// const config = {
//   appName: "scaler.com",
//   database: {
//     host: "127.0.0.1",
//     name: "mainDb",
//     user: "root",
//     pwd: "admin",
//   },
//   extra: 10,
// };
// let notExtendableObj = Object.freeze(config);
// notExtendableObj.database = Object.freeze(notExtendableObj.database);
// notExtendableObj.tempServer = "127.0.0.18";
// notExtendableObj.database.newpwd = "fake";
// delete notExtendableObj.extra;
// notExtendableObj.appName = "interviewbit.com";
// // // console.log(config);
// console.log(notExtendableObj);

// HW : n-level : freeze, seal and preventExtension
// st1
// st2

//n-level preventExtensions
function preventExtension(obj) {
  let newObj = Object.preventExtensions(obj);
  for (let key in newObj) {
    let isObject = typeof newObj[key];
    if (isObject == "object") {
      let temp = preventExtension(newObj[key]);
      newObj[key] = temp;
    }
  }
  return newObj;
}

//n-level seal
function Seal(obj) {
  let newObj = Object.seal(obj);
  for (let key in newObj) {
    let isObject = typeof newObj[key];
    if (isObject == "object") {
      let temp = Seal(newObj[key]);
      newObj[key] = temp;
    }
  }
  return newObj;
}

//n-level freeze
function Freeze(obj) {
  let newObj = Object.freeze(obj);
  for (let key in newObj) {
    let isObject = typeof newObj[key];
    if (isObject == "object") {
      let temp = Freeze(newObj[key]);
      newObj[key] = temp;
    }
  }
  return newObj;
}
