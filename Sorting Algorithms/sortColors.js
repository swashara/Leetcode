/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function (nums) {
//   for (let i = 1; i < nums.length; i++) {
//     let currentVal = nums[i];
//     for (j = i - 1; j >= 0 && nums[j] > currentVal; j--) {
//       nums[j + 1] = nums[j];
//     }
//     nums[j + 1] = currentVal;
//   }
//   return nums;
// };
var swap = function (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let k = right;
  while (left <= right) {
    let curr = nums[right];
    if (curr === 0) {
      swap(nums, left++, right);
    } else if (curr === 2) {
      swap(nums, right--, k--);
    } else {
      right--;
    }
  }
  return nums;
};
console.log(sortColors([2, 0, 2, 1, 1, 0]));
