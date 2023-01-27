/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let xArray = [];
  for (point of points) {
    xArray.push(point[0]);
  }
  xArray = xArray.sort((a, b) => a - b);
  let max = 0;
  for (let i = 0; i < xArray.length - 1; i++) {
    let width = xArray[i + 1] - xArray[i];
    max = Math.max(width, max);
  }
  return max;
};
let res = maxWidthOfVerticalArea([
  [8, 7],
  [9, 9],
  [7, 4],
  [9, 7],
]);
console.log(res);
