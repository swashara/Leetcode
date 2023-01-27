/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   let ans = [];
//   let maxSum = 0;
//   let hashMap = {};
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum = sum + nums[j];
//       if (sum > maxSum) {
//         hashMap[nums[i]] = sum;
//       }
//     }
//   }
//   let max = 0;
//   let index = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (hashMap[nums[i]] > max) {
//       max = hashMap[nums[i]];
//       index = i;
//     }
//   }
//   //   for (let i = index; i < nums.length; i++) {
//   //     ans.push(nums[i]);
//   //   }
//   return max;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//   let ans = [];
//   let maxSum = 0;
//   let hashMap = {};
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum = sum + nums[j];
//       if (sum > maxSum) {
//         hashMap[nums[i]] = sum;
//       }
//     }
//   }
//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (hashMap[nums[i]] > max) {
//       max = hashMap[nums[i]];
//       index = i;
//     }
//   }
//   console.log(hashMap);
//   return max;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let curSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (curSum < 0) {
      curSum = 0;
    }
    curSum = curSum + nums[i];
    if (curSum > maxSum) {
      maxSum = curSum;
    }
  }
  return maxSum;
};
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
