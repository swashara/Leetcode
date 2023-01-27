/**
 * @param {number[]} height
 * @return {number}
 */
// This is a brute force solution. With this solution, you get TLE error on Leetcode
// var maxArea = function (height) {
//   let mArea = 0;
//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       let area = 0;
//       let ht = height[i] < height[j] ? height[i] : height[j];
//       area = ht * (j - i);
//       if (area > mArea) {
//         mArea = area;
//       }
//     }
//   }
//   return mArea;
// };
// [1, 8, 6, 2, 5, 4, 8, 3, 7]

// Two pointer technique
var maxArea = function (height) {
  let mArea = 0;
  let area = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    area = Math.min(height[left], height[right]) * (right - left);
    if (area > mArea) {
      mArea = area;
    }

    if (height[left] < height[right]) {
      left = left + 1;
    } else {
      right = right - 1;
    }
  }
  return mArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
