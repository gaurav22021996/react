/* Common Services */

// Get Random Clor
export const RandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Get Boundary Element Index
export const GetBoundaryElementIndex = (matrix, numRows, numCols) => {
  let boundaries = [];

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (i === 0) { boundaries.push([i, j]); }
      else if (i === numRows - 1) { boundaries.push([i, j]); }
      else if (j === 0) { boundaries.push([i, j]); }
      else if (j === numCols - 1) { boundaries.push([i, j]); }
    }
  }
  return boundaries;
}