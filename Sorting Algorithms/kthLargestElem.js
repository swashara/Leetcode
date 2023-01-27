/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  for (let i = 1; i < nums.length; i++) {
    let currentVal = nums[i];
    for (j = i - 1; j >= 0 && nums[j] < currentVal; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = currentVal;
  }
  return nums[k - 1];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
