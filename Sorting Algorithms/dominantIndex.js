/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let max = nums[0];
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      index = i;
    }
  }
  for (let i = 0; i < nums.length && i !== index; i++) {
    if (!(max > 2 * nums[i])) return -1;
  }
  return index;
};
console.log(dominantIndex([3, 6, 1, 0]));
