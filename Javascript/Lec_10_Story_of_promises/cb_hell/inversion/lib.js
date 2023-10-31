function runMlalgo(amount, cb) {
  console.log("running ml algo");
  console.log("processing payment");
  setTimeout(function () {
    console.log("payment done");
    cb();
    cb();
    cb();
    cb();
    cb();
  }, 1000);
}

function pRunMLalgo() {
  return new Promise((resolve, reject) => {
    console.log("running ml algo");
    console.log("processing payment");
    setTimeout(function () {
      console.log("payment done");
      resolve();
      resolve();
      resolve();
      resolve();
      resolve();
      reject();
    }, 1000);
  });
}
//The point with promise is once it is resolved it becomes a black box not having any effect with further resolve
//why promises are better than callbacks?It is because promises can either be resolved or rejected once in the lifetime
//callback of promises goes to a separate queue known as microtask queue and it has higher precedence than normal callback queue

module.exports = {
  runMlalgo,
  pRunMLalgo,
};
