/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function (nums) {
  if (nums.length <= 2) {
    return -1;
  }
  nums = nums.sort((a, b) => a - b);
  return nums[1];
};
let ans = findNonMinOrMax((nums = [3]));
console.log(ans);
