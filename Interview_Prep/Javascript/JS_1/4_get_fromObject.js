// # Asked in Amazon, ByteDance

// Please create your own get()

// const obj = {
//     a: {
//         b: {
//             c: [1, 2, 3]
//         }
//     }
// }
// [a, b, c[3]] => [a, b, c, 3]
// get(obj, 'a.b.c') // [1,2,3]
// get(obj, 'a.b.c.0') // 1
// get(obj, 'a.b.c[1]') // 2
// get(obj, ['a', 'b', 'c', '2']) // 3
// get(obj, 'a.b.c[3]') // undefined
//     < !-- if i am requesting for a key,
//         alternate message then if that key is not found please print the arg-->
//             get(obj, 'a.c', 'bfe') // 'bfe'

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

// [a, b, c[3]] => [a, b, c, 3]

function get(obj, path, defaultValue = undefined) {
  let pathisArray = Array.isArray(path);
  if (!pathisArray) {
    let pathArr = path.split(".");
    console.log("pathArr ", pathArr);
    let lastElem = pathArr[pathArr.length - 1]
      .replace("[", ".")
      .replace("]", "")
      .split(".");
    console.log("lastElem ", lastElem);
    pathArr.pop();
    console.log("pathArr second time ", pathArr);
    pathArr = [...pathArr, ...lastElem];
    path = pathArr;
  }
  let nextEntry = null;

  for (let i = 0; i < path.length; i++) {
    let key = path[i];
    nextEntry = obj[key];
    if (nextEntry == undefined) return defaultValue;
    if (i == path.length - 1) return nextEntry;
    else {
      obj = nextEntry;
      console.log("obj is ", obj);
    }
  }
}

//let res = get(obj, ["a", "b", "c", "2"]); // 3
let res = get(obj, "a.b.c[3]"); // 2
console.log("res", res);
