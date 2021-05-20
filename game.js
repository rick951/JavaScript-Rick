import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection, changeSpeed as changeSpeed } from './snake_body.js';
import { update as updateFood, draw as drawFood, changeExpantion as changeExpantion } from './apple.js';
import { outsideGrid } from './land.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

document.querySelector("body").addEventListener("keydown", changeSpeeed);
function changeSpeeed(event){
  if(event.keyCode == 83 ){
    let newSpeed = prompt('new snake speed');
    changeSpeed(newSpeed);
  }
}
document.querySelector("body").addEventListener("keydown", changeincrease);
function changeincrease(event){
  if(event.keyCode == 76 ){
    let newSpeed = prompt('new increase length');
    changeExpantion(newSpeed);
  }
}


function main(currentTime) { // use to start and run the game
  if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location = '/'; // refresh the page (reset the code)
    }
    return;
  }

    // requestAnimationFrame is use to get milisecond run time
  window.requestAnimationFrame(main) //every frame will call the function main to run the game
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; //use this to convert milisecond to second
  if (secondsSinceLastRender < 1 / snakeSpeed) return;


  lastRenderTime = currentTime; // reset the last render time to current time. 

  update(); // update every frame to chech each condition
  draw();
}

window.requestAnimationFrame(main)

function update() { // check each condition
  updateSnake(); // update the snake body
  updateFood(); // check for if need to update food and update if needed
  checkDeath(); // check if dead. 
}

function draw() {
  gameBoard.innerHTML = ''; // to clear the previous html(css) to let the snake update as we want. 
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}