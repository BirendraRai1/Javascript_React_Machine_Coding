//Game Constconst & Variables
//use Alt+shift key and upper arrow key to change all the let to const
let direction = { x: 0, y: 0 }; //initial position of snake.snake will move on pressing the key
const foodSound = new Audio("../music/food.mp3");
const gameOverSound = new Audio("../music/gameover.mp3");
const moveSound = new Audio("../music/move.mp3");
const musicSound = new Audio("../music/music.mp3");

//Game Functions
//here ctime is the current time
function main(ctime) {
  window.requestAnimationFrame(main);
  console.log(ctime);
}
//lecture starts from 20.41minutes
//Main logic starts here
window.requestAnimationFrame(main);
