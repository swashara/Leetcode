/**
 * @param {number[]} nums
 * @return {number}
 */
// var minimumOperations = function (nums) {
//   nums = nums.sort(function (a, b) {
//     return a - b;
//   });
//   count = 0;
//   ele = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       continue;
//     }
//     ele = nums[i];
//     count++;
//     for (let j = i; j < nums.length; j++) {
//       nums[j] = nums[j] - ele;
//     }
//   }
//   return count;
// };
var minimumOperations = function (nums) {
  let set = new Set();
  for (ele of nums) {
    if (ele !== 0) {
      set.add(ele);
    }
  }
  return set.size;
};
let arr = [1, 5, 0, 3, 5];
// let arr = [0];
let res = minimumOperations(arr);
console.log(res);
