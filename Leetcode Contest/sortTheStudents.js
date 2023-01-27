/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  score = score.sort((a, b) => b[k] - a[k]);
  return score;
};
let ans = sortTheStudents(
  [
    [10, 6, 9, 1],
    [7, 5, 11, 2],
    [4, 8, 3, 15],
  ],
  2
);

console.log(ans);
