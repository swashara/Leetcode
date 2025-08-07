/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currSum = 0;
  for (let num of nums) {
    if (currSum < 0) {
      currSum = 0;
    }
    currSum = currSum + num;
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
};

const ans = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(ans);
