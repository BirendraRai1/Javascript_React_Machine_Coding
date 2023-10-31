// ## Approach
//     * Inputs :
//         test case : 1:25: 30
//     -> html: input: number
// mins = 25
// input: 30
//     -> star button
// 1. countdown -> 1sec -> setInterval ->
//     a.time -> decrement
// b.show the text change
// 2. start -> pause

// add eventListener

const hrsInput = document.getElementById("hr");
const minInput = document.getElementById("min");
const secInput = document.getElementById("sec");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const pauseBtn = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
const timerObject = {};
let timerId;
let prevInsecs;
let timeInSeconds;

pauseBtn.addEventListener("click", function () {
  prevInsecs = timeInSeconds;
  clearTimeout(timerId);
});

continueBtn.addEventListener("click", function () {
  timer(prevInsecs);
});

startBtn.addEventListener("click", function () {
  // get the values
  let hrs = hrsInput.value || 0;
  let mins = minInput.value || 0;
  let sec = secInput.value || 0;
  // find out the time in second

  timeInSeconds = parseInt(hrs) * 3600 + parseInt(mins) * 60 + parseInt(sec);
  // console.log(timeInSeconds)
  //timerObject.timeLeft = timeInSeconds;
  timer(timeInSeconds);
});

resetBtn.addEventListener("click", function () {
  // timerObject.timeLeft = 0;
  prevInsecs = 0;
  clearTimeout(timerId);
  showTimer(prevInsecs);
  // clear the text
});

function timer(timeInSeconds) {
  //    -> timer automatically goes to zero
  if (timeInSeconds == 0) return;
  //  depending upon recursion
  timerId = setTimeout(() => {
    console.log("Timer clocked", timeInSeconds);
    showTimer(timeInSeconds);
    timeInSeconds--;
    timer(timeInSeconds);
  }, 1000);
}

// export it as component
function showTimer(timeInSeconds) {
  let hours = parseInt(titimerObject.timeLeftmeInSeconds / 3600);
  timeInSeconds1 = parseInt(timeInSeconds % 3600);
  console.log("timeInSeconds1 for minutes ", timeInSeconds1);
  let minutes = parseInt(timeInSeconds1 / 60);
  timeInSeconds1 = parseInt(timeInSeconds1 % 60);
  let seconds = parseInt(timeInSeconds1);
  hrsInput.value = hours;
  minInput.value = minutes;
  secInput.value = seconds;
  console.log(hours, minutes, seconds);
}
