function debounce(fn, delay = 500) {
  let timeoutID = null;
  return function (...args) {
    console.log("delay is ", delay);
    if (timeoutID) {
      // reseting the timer
      console.log("reseting the timers");
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => fn(...args), delay);
  };
}

function printHello(args) {
  console.log("hello", args);
}
const debouncedPrintHello = debounce(printHello, 2000);
debouncedPrintHello("biru");

setTimeout(() => {
  debouncedPrintHello("satu");
  setTimeout(() => {
    debouncedPrintHello("annu");
  }, 1000);
}, 1000);

/*debounce usecase:-It is also used to put a limit
 *It is used on autocomplete feature
 *Note:-In debouncing time represents delay
 *It limit the key strokes but you want the result of the latest action
 *
 *
 * Lets say we want to type robert in google search and lets assume that
 * we want to delay for 20milliseconds and assume that key stroke takes 10milliseconds
 * Lets call the debounce function and initially we typed r it took 10 milliseconds.In the next 10milliseconds
 * I typed o.Initially when we typed r at that time time was 0 then
 * this delay of 20 milliseconds will start kicking .In the next 10milliseconds i was able to type o.So the delay time will become 10 milliseconds when i was
 * typing o .after typing o the delay time will reset to 20 milliseconds*****/

/*In simple words difference between throttling and debouncing is:-
Throttling for first call and debouncing for latest result
**/

/*Throttling: Perform specific action only once in a time window
Debouncing: Perform action only after certain window and if input received in that window then window will be reset
****/

/*Remember that debouncing is useful in scenarios
 *where you want to delay the execution of a function
 *until a certain amount of time has passed without
 *additional calls
 ******/
