const STATE = {
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
  PENDING: "pending",
};
class MyPromise {
  #thenCbs = [];
  #catchCbs = [];
  #state = STATE.PENDING;
  #value;
  constructor(cb) {
    //To make a public method private, you prefix its name with a hash #
    try {
      cb(this.#onSuccess, this.#onFail);
    } catch (e) {
      this.#onFail(e);
    }
  }
  #runCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#thenCbs.forEach((callback) => {
        callback(this.#value);
      });
      this.#thenCbs = [];
    }
    if (this.#state === STATE.REJECTED) {
      this.#catchCbs.forEach((callback) => {
        callback(this.#value);
      });
      this.#catchCbs = [];
    }
  }
  #onSuccess(value) {
    if (this.#state !== STATE.PENDING) return;
    this.#value = value;
    this.#state = STATE.FULFILLED;
    this.#runCallbacks();
  }
  #onFail(value) {
    if (this.#state !== STATE.PENDING) return;
    this.#value = value;
    this.#state = STATE.REJECTED;
    this.#runCallbacks();
  }
  then(cb) {
    this.#thenCbs.push(cb);
  }
}
module.exports = MyPromise;
const p = new Promise((resolve, reject) => {
  //code
  resolve("HI");
  resolve("HI");
  resolve("HI");
  resolve("HI");
  reject("error");
}).then();
p.then();
p.then();
