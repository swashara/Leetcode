/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function (nums, k) {
//   let res = [];
//   for (let i = 0; i <= nums.length - k; i++) {
//     let l = i;
//     let r = i + k;
//     let max = Number.NEGATIVE_INFINITY;
//     while (l < r) {
//       max = Math.max(max, nums[l]);
//       l++;
//     }
//     res.push(max);
//   }
//   return res;
// };
var maxSlidingWindow = function (nums, k) {
  let res = [];
  let q = [];
  for (let i = 0; i < nums.length; i++) {
    while (q.length && nums[q[q.length - 1]] <= nums[i]) {
      q.pop();
    }
    q.push(i);
    if (q[0] === i - k) {
      q.shift();
    }
    if (i >= k - 1) {
      res.push(nums[q[0]]);
    }
  }
  return res;
};
let ans = maxSlidingWindow((nums = [1, 3, -1, -3, 5, 3, 6, 7]), (k = 3));
console.log(ans);
