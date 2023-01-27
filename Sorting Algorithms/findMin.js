/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function (nums) {
//   let min = nums[0];
//   let index = 0;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] < min) {
//       min = nums[i];
//       index = i;
//     }
//   }
//   console.log(min, index);
//   for (let i = 0; i < nums.length - index; i++) {
//     nums.unshift(nums.pop());
//   }
//   console.log(nums[0]);
//   return min;
// };
// console.log(findMin([4, 5, 6, 7, 0, 1, 2]));

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let res = nums[0];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] < nums[right]) {
      res = Math.min(res, nums[left]);
      break;
    }
    let middle = Math.floor((left + right) / 2);
    res = Math.min(res, nums[middle]);
    if (nums[middle] >= nums[left]) {
      // search right
      left = middle + 1;
    } else {
      // search left
      right = middle - 1;
    }
  }
  return res;
};

console.log(findMin([2, 1]));
