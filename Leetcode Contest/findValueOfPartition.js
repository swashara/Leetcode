/**
 * @param {number[]} nums
 * @return {number}
 */
// var findValueOfPartition = function (nums) {
//   let min = Infinity;
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       let diff = Math.abs(nums[i] - nums[j]);
//       min = Math.min(min, diff);
//     }
//   }
//   return min;
// };
var findValueOfPartition = function (nums) {
  let min = Infinity;
  let sum = nums.reduce((partialSum, a) => partialSum + a, 0);
  let mean = Math.floor(sum / nums.length);
  console.log(mean, sum);
  return min;
};
// let ans = findValueOfPartition((nums = [1, 10, 100]));
let ans = findValueOfPartition((nums = [1, 2, 3, 4]));
console.log(ans);
