/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let res = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === target) {
      res = left;
      return res;
    }
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      res = middle;
      return res;
    }
    if (nums[middle] > target) {
      // search right
      left = middle + 1;
    } else {
      // search left
      right = middle - 1;
    }
  }
  return -1;
};

console.log(search([1, 3], 3));
