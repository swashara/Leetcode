/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let res = [];
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    // sum[i] = (nums[i] * nums[i + 1]) / 2;
    sum = sum + nums[i];
    res[i] = sum;
  }
  return res;
};

//let arr = [1, 2, 3, 4];
let arr = [1, 1, 1, 1];
let res = runningSum(arr);
console.log(res);
