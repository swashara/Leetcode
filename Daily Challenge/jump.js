/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let l = 0;
  let r = 0;
  let res = 0;
  let farthest = 0;
  while (r < nums.length - 1) {
    for (let i = l; i < r + 1; i++) {
      farthest = Math.max(farthest, i + nums[i]);
    }
    l = r + 1;
    r = farthest;
    res += 1;
  }
  return res;
};
let ans = jump([2, 3, 1, 1, 4]);
console.log(ans);
