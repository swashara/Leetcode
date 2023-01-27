/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid = Math.floor((start + end) / 2);

  if (target < nums[start]) return -1;
  if (target > nums[end]) return end + 1;

  while (start < end) {
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      end = mid;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }

  if (start === end) {
    return target <= nums[start] ? start : start + 1;
  }
};

let arr = [1, 3, 5, 6];
let item = 5;
let res = searchInsert(arr, item);
console.log(res);
