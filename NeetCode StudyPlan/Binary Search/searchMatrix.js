/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let res = false;
  for (let row of matrix) {
    let start = row[0];
    let end = row[row.length - 1];
    if (target === start || target === end) {
      return true;
    }
    if (target > start && target < end) {
      let left = 0;
      let right = row.length - 1;
      while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (target === row[mid]) {
          return true;
        } else if (target < row[mid]) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }
    } else {
      continue;
    }
  }
  return res;
};
let ans = searchMatrix(
  [
    [-8, -7, -5, -3, -3, -1, 1],
    [2, 2, 2, 3, 3, 5, 7],
    [8, 9, 11, 11, 13, 15, 17],
    [18, 18, 18, 20, 20, 20, 21],
    [23, 24, 26, 26, 26, 27, 27],
    [28, 29, 29, 30, 32, 32, 34],
  ],
  -5
);
console.log(ans);
