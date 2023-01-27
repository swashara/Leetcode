/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start;
  let end;
  let middle;
  if (nums.length === 1) {
    start = 0;
    end = start;
    middle = Math.floor((start + end) / 2);
  }
  start = 0;
  end = nums.length - 1;
  middle = Math.floor((start + end) / 2);

  while (nums[middle] !== target && start <= end) {
    if (target < nums[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return nums[middle] == target ? middle : -1;
};

let arr = [5];
let item = 5;
let res = search(arr, item);
console.log(res);
