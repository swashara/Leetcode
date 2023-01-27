/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let res = [];
  if (intervals.length <= 1) {
    return intervals;
  }
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let previous = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (previous[1] >= intervals[i][0]) {
      previous = [previous[0], Math.max(previous[1], intervals[i][1])];
    } else {
      res.push(previous);
      previous = intervals[i];
    }
  }
  res.push(previous);

  return res;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
