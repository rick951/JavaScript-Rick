  
import { onSnake, expandSnake } from './snake_body.js'
import { randomGridPosition } from './land.js'

let food = getRandomFoodPosition();
let EXPANSION_RATE = 1; // each food eatten increase 1 block
export function changeExpantion(a){
  EXPANSION_RATE = a;
}
export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) { // same with the snake body, to draw the apple. 
  const apple = document.createElement('div')
  apple.style.gridRowStart = food.y
  apple.style.gridColumnStart = food.x
  apple.classList.add('food')
  gameBoard.appendChild(apple)
}

function getRandomFoodPosition() { // create a new apple that is not one the snake. 
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {// prevent the apple appear on the snake. 
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}