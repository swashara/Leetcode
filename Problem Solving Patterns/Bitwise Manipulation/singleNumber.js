/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};
let ans = singleNumber([4, 1, 2, 1, 2]);
console.log(ans);
