let inputDirection = { x: 0, y: 0 } // direction of the snake
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', e => { 
  switch (e.key) { // to check if change direction
    case 'ArrowUp':
      if (lastInputDirection.y !== 0) break; // prevent press up then down
      inputDirection = { x: 0, y: -1 } // add and decrease the coordinate
      break;
    case 'ArrowDown':
      if (lastInputDirection.y !== 0) break;//etc
      inputDirection = { x: 0, y: 1 } // add and decrease the coordinate
      break;
    case 'ArrowLeft':
      if (lastInputDirection.x !== 0) break;//etc
      inputDirection = { x: -1, y: 0 };// add and decrease the coordinate
      break;
    case 'ArrowRight':
      if (lastInputDirection.x !== 0) break;//etc
      inputDirection = { x: 1, y: 0 }// add and decrease the coordinate
      break;
  }
})

export function getInputDirection() { // export getInputDirection to get the direction. 
  lastInputDirection = inputDirection;
  return inputDirection;
}