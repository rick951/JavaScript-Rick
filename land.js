const GRID_SIZE = 21

export function randomGridPosition() { // give a random position in the grid. 
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1, //Math.floor : Returns the greatest integer less than or equal to its numeric argument(int in this case).
    y: Math.floor(Math.random() * GRID_SIZE) + 1
  }
}

export function outsideGrid(position) { // check if the position is out of grid. 
  return (
    position.x < 1 || position.x > GRID_SIZE ||
    position.y < 1 || position.y > GRID_SIZE
  ) // only need to check head because the body will followthe head. 
}