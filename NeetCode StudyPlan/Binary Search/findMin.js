/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let min = Infinity;
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (nums[mid] >= nums[l]) {
      min = Math.min(min, nums[l]);
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return min;
};
let ans = findMin([11, 13, 15, 17]);
console.log(ans);
