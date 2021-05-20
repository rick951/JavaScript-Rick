import { getInputDirection } from "./control.js";

export let snakeSpeed = 5;
const snakeBody = [{ x: 11, y: 11 }];// first draw the snake a t the center of window
let newSegments = 0;
export function changeSpeed(a){
  snakeSpeed = a;
}
export function update() { // use export function to let update ca be access in game.js
  addSegments();

  const inputDirection = getInputDirection()
  for (let i = snakeBody.length - 2 /*loop throug each snake body except the head*/; i >= 0; i--) {
    snakeBody[i + 1]/*the last body */ = { ...snakeBody[i]/*create a new object at the new place*/ }  // lt the body follow the one befor it. 
  }

  snakeBody[0].x += inputDirection.x; //from control.js
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) { // draw the game board(snake and apple)
  snakeBody.forEach(i => { //use to loop through each pice of the snake(snake body)
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = i.y; 
    snakeElement.style.gridColumnStart = i.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  })
}

export function expandSnake(amount) {
  newSegments += amount; 
}

export function onSnake(position, { ignoreHead = false } = {}) { //function of is thing is on snake_body then return true
  return snakeBody.some((segment, index) => {
        if (ignoreHead && index === 0) return false;
    return equalPositions(segment, position);
  })
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true }) // check if the snake hea is on snake body. ignore snake head. 
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() { //add the snake for one segment(1 length of snake). 
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] }) // add a new segment(increase one length) to the end of the snake. 
  }

  newSegments = 0
}