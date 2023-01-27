/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
  let y = mat.length;
  let x = mat[0].length - 1;
  console.log(x, y);
  for (let i = 2 - y; i < x; i++) {
    let diag = new Array(y);
    let k = 0;
    for (let j = 0; j < y; j++) {
      if (mat[j][i + j]) {
        diag[k++] = mat[j][i + j];
      }
    }
    diag.sort((a, b) => a - b);

    let n = 0;
    // console.log(diag);

    for (let j = 0; j < y; j++) {
      if (mat[j][i + j]) {
        mat[j][i + j] = diag[n++];
      }
    }
  }
  return mat;
};
let res = diagonalSort([
  [3, 3, 1, 1],
  [2, 2, 1, 2],
  [1, 1, 1, 2],
]);
console.log(res);
