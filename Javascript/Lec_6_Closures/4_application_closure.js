// infinite curry
function counter(args) {
  // write code only inside this function
  let count = 0;
  count++;
  if (args == 0) {
    return count;
  } else {
    return function inner(args) {
      console.log("came inside inner ", inner);
      count++;
      if (args == 0) return count;
      else return inner;
    };
  }
}

/***
 *Note:- if we return counter our count would be reinitialized to 0 which is wrong.
         we would not be able to use the power of closure
 * ***/
// console.log(counter(0)); // print -> 1
// console.log(counter()()()(0));
//console.log(counter()()()()(0)); // print ->5

// let firstCounter = counter();
// console.log("firstCounter is ", firstCounter);
// let secondCounter = firstCounter();
// console.log("secondCounter is", secondCounter);
// let thirdCounter = secondCounter();
// console.log("thirdCounter", thirdCounter);
// let fourthCounter = thirdCounter(0);
// console.log("fourthCounter", fourthCounter);

function sum(a) {
  return function (b) {
    console.log("b is ", b);
    if (b) {
      return sum(a + b);
    } else {
      return a;
    }
  };
}

//sum(3)(4)(); // 7

// sum(3)(7)(8)(); //18

/**
 * Memoization function
 * creating private variables
 * */

/***************Private variables******/
function createEvenStack() {
  let items = [];
  return {
    push(item) {
      if (item % 2 == 0) {
        console.log("Is pushed");
        items.push(item);
      } else {
        console.log("Please input even value");
      }
    },
    pop() {
      return items.pop();
    },
  };
}

const stack = createEvenStack();
console.log("stack is ", stack);
stack.push(10);
stack.push(5);
stack.pop();
// stack.items; // => [10]
console.log(stack.items);
//stack.items = [10, 100, 1000]; // prevent this behaviour
//console.log(stack.items);
/**
 * Memoization : sum calculation take a lot of time  with
 * memoization we can store  result of costly calculations .
 * It is majorly used in useMemo hook in react
 * */

function calc(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}

// console.time();
// let res = calc(100);
// console.log("res", res);
// console.timeEnd();

function memoize(fn) {
  let cache = {};
  return function (n) {
    // Two things happen in cache .Either the result is present in cache or not present
    // if it is not present  call the actual function and
    // add the result to the cache
    //then return  the result
    let istheInputPresent = cache[n] == undefined; // or we can use Object.keys(cache).includes(n) in case of cache[n]==undefined
    if (!istheInputPresent) {
      return cache[n];
    } else {
      const result = fn(n);
      cache[n] = result;
      return result;
    }
  };
}
let efficentCalcFN = memoize(calc);
console.time();
console.log(efficentCalcFN(5));
console.timeEnd();

console.time();
efficentCalcFN(5);
console.timeEnd();
