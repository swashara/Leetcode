/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let l = 0;
  let res = Infinity;
  let window = [];
  let total = 0;

  for (let r = 0; r < nums.length; r++) {
    total = total + nums[r];
    while (total >= target) {
      res = Math.min(res, r - l + 1);
      total = total - nums[l];
      l = l + 1;
    }
  }
  if (res === Infinity) {
    return 0;
  }
  return res;
};
let ans = minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
console.log(ans);
