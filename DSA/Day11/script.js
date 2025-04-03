/*
    Find Transpose of a Matrix
*/
// For N*N matrix
function transposeMatrixNN(arr) {
  const rows = arr.length;
  const cols = arr[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = i; j < cols; j++) {
      [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
    }
  }
  return [...arr];
}

// For M*N matrix
function transposeMatrixMN(arr) {
  const transpose = [];
  for (let i = 0; i < arr[0].length; i++) {
    transpose[i] = [];
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      transpose[j][i] = arr[i][j];
    }
  }
  return transpose;
}

let arr = [
  [2, 4, -1],
  [-10, 5, 11],
  [18, -7, 6],
];

let ans = transposeMatrixNN(arr);
console.log(ans);
arr = [
  [1, 2, 3],
  [4, 5, 6],
];
ans = transposeMatrixMN(arr);
console.log(ans);
