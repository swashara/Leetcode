/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  heights.push(0);
  let stack = [];
  let res = 0;
  for (let i = 0; i < heights.length; i++) {
    let heightStart = i;
    while (stack.length && stack[stack.length - 1][1] > heights[i]) {
      let [pos, height] = stack.pop();
      let area = (i - pos) * height;
      res = Math.max(res, area);
      heightStart = pos;
    }
    stack.push([heightStart, heights[i]]);
  }
  return res;
};
let ans = largestRectangleArea([2, 1, 5, 6, 2, 3]);
console.log(ans);
