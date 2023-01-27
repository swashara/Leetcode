/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let mid = Math.floor(nums.length / 2);
  if (nums.length % 2 === 0) {
    mid = mid + 0;
  } else {
    mid = mid + 1;
  }
  let slice1 = nums.slice(0, mid);
  let slice2 = nums.slice(mid);
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      nums[i] = slice1.pop();
    } else {
      nums[i] = slice2.pop();
    }
  }

  return nums;
};
let res = wiggleSort([1, 1, 2, 1, 2, 2, 1]);
console.log(res);
