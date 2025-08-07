/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let m of matrix) {
    let shiftedM = matrix.shift();
    matrix.push(shiftedM.reverse());
  }
  return matrix;
};
let ans = rotate(
  (matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(ans);
