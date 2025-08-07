/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function (nums) {
//   if (nums.length === 0) {
//     return 0;
//   } else if (nums.length === 1) {
//     return 1;
//   }
//   nums = nums.sort((a, b) => a - b);
//   let res = 0;
//   let diffMap = {};
//   for (let i = 0; i < nums.length; i++) {
//     let diff = nums[i + 1] - nums[i];
//     diffMap[diff] = (diffMap[diff] || 0) + 1;
//   }
//   let resArr = Object.values(diffMap).sort((a, b) => b - a);
//   res = resArr[0] + 1;
//   return res;
// };
var longestConsecutive = function (nums) {
  let numsSet = new Set(nums);
  let res = 0;

  for (let n of nums) {
    if (!numsSet.has(n - 1)) {
      let length = 0;
      while (numsSet.has(n + length)) {
        length++;
      }
      res = Math.max(res, length);
    }
  }
  return res;
};

let ans = longestConsecutive([100, 4, 200, 1, 3, 2]);
console.log(ans);
