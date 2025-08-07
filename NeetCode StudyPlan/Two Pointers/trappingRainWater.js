/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {
//   let maxLeft = [];
//   let maxRight = [];
//   let bucketVol = 0;
//   let maxL = 0;

//   for (let i = 0; i < height.length; i++) {
//     maxLeft.push(maxL);

//     maxL = Math.max(maxL, height[i]);
//   }
//   maxL = 0;
//   for (let i = height.length - 1; i >= 0; i--) {
//     maxRight[i] = maxL;
//     maxL = Math.max(maxL, height[i]);
//   }
//   for (let i = 0; i < height.length; i++) {
//     let min = Math.min(maxLeft[i], maxRight[i]);
//     let diff = min - height[i];
//     if (diff > 0) {
//       bucketVol += diff;
//     }
//   }
//   return bucketVol;
// };
var trap = function (height) {
  if (!height) return 0;
  let l = 0;
  let r = height.length - 1;
  let leftMax = height[l];
  let rightMax = height[r];
  let res = 0;
  while (l < r) {
    if (leftMax < rightMax) {
      l = l + 1;
      leftMax = Math.max(leftMax, height[l]);
      res += leftMax - height[l];
    } else {
      r = r - 1;
      rightMax = Math.max(rightMax, height[r]);
      res += rightMax - height[r];
    }
  }
  return res;
};
let ans = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(ans);
