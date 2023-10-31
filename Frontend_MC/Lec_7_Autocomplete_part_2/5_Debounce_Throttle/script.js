const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDebounceText = debounce((text) => {
  //console.log("inside debounce text is ", text);
  debounceText.textContent = text;
});

const updateThrottleText = throttle((text) => {
  console.log("inside throttle text is ", text);
  throttleText.textContent = text;
});

input.addEventListener("input", (e) => {
  defaultText.innerText = e.target.value;
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});

//debouncing function
function debounce(cb, delay = 1000) {
  let timeoutID = null;
  return function (...args) {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
    timeoutID = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

//function throttle
// function throttle(cb, interval = 1000) {
//   let shouldWait = false;
//   return function (...args) {
//     if (shouldWait) return;
//     cb(...args);
//     shouldWait = true;
//     setTimeout(() => {
//       shouldWait = false;
//     }, interval);
//   };
// }

/*Here we need to tweak the throttle method and make it more advanced so that we save the last call that happened in 1 sec 
and send the request afterwards*****/
function throttle(cb, interval = 1000) {
  let shouldWait = false;
  let waitingArgs = null;
  const timeoutFunc = () => {
    if (waitingArgs) {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, interval);
    } else {
      shouldWait = false;
    }
  };
  return function (...args) {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, interval);
  };
}

/*seeing changes when we are doing mouse move for default ,debounce and throttle
 *****/

// document.addEventListener("mousemove", () => {
//   incrementCount(defaultText);
//   debounceMouseMove();
//   throttleMouseMove();
// });

// function incrementCount(element) {
//   element.textContent = parseInt(element.innerText || 0) + 1;
// }

// const debounceMouseMove = debounce(() => {
//   incrementCount(debounceText);
// });

// const throttleMouseMove = throttle(() => {
//   incrementCount(throttleText);
// });
