/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let row = [];
  let col = [];
  for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row.push(i);
        col.push(j);
      }
    }
  }
  for (let r of row) {
    for (let i = 0; i < matrix[r].length; i++) {
      matrix[r][i] = 0;
    }
  }
  for (let c of col) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][c] = 0;
    }
  }
  return matrix;
};
let ans = setZeroes([[1], [0]]);
console.log(ans);
