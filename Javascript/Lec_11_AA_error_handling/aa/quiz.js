const { time } = require("console");

function resolveAfterNSeconds(delay, x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, delay);
  });
}

(function () {
  let a = resolveAfterNSeconds(1000, 1);
  console.time();
  a.then(async function (x) {
    //1sec
    let y = await resolveAfterNSeconds(2000, 2); //2 sec
    let z = await resolveAfterNSeconds(1000, 3); //1 sec

    // 4sec

    let p = resolveAfterNSeconds(2000, 4);
    let q = resolveAfterNSeconds(1000, 5);

    // p = await p;
    // q = await q;

    console.log(x + y + z + (await p) + (await q)); //here we are waiting for p and as we get the result of p we use it and we dont have to wait for q as it required time to execute is less

    /**
     * litreal meaning of await -> waiting for some result
     * if result is pending -> wait
     * if your result -> use
     * **/
    console.timeEnd();
  });
})();

/****
 * here total time taken to execute will be 6 seconds and the total output of resolved will be 15
 * here p and q will be executed in parallel and the total time taken will be the maximum time taken by either of them her it is 2sec
 *
 */

// async function getData() {
//     return 10
// }
// let a = await getData();
// console.log(a)
