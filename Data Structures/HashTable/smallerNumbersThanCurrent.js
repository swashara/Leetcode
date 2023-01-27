/**
 * @param {number[]} nums
 * @return {number[]}
 */
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = 0; j < nums.length; j++) {
//       if (j !== i) {
//         if (nums[j] < nums[i]) {
//           count++;
//         }
//       }
//     }
//     hash.push(count);
//   }
var smallerNumbersThanCurrent = function (nums) {
  let hash = new Map();
  let sortedArr = [...nums].sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < sortedArr.length; i++) {
    if (!hash.has(sortedArr[i])) {
      hash.set(sortedArr[i], i);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = hash.get(nums[i]);
  }
  return nums;
};
let nums = [8, 1, 2, 2, 3];
let res = smallerNumbersThanCurrent(nums);
console.log(res);
