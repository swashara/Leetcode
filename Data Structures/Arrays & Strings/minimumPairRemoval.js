/**
 * @param {number[]} nums
 * @return {number}
 */
// var minimumPairRemoval = function (nums) {
//   let numOfOperations = 0;

//   function isArraySorted(arr) {
//     if (arr.length <= 1) return false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   if (isArraySorted(nums)) return 0;

//   let minSum = Infinity;
//   let minIndex = 0;
//   for (let i = 0; i < nums.length - 1; i++) {
//     let sum = nums[i] + nums[i + 1];
//     if (sum < minSum) {
//       minSum = sum;
//       minIndex = i;
//     }
//   }
//   for (i = minIndex; i > 0; i--) {
//     let sum = nums[i] + nums[i + 1];
//     nums.splice(i, 2, sum);
//     numOfOperations++;
//   }
//   return numOfOperations;
// };

// let ans = minimumPairRemoval([-2, 1, 2, -1, -1, -2, -2, -1, -1, 1, 1]);
let ans;
console.log(ans);
