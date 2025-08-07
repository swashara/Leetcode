/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let res = new Array(nums.length + 1).fill(-1);
  for (let num of nums) {
    res[num] = num;
  }

  return res.indexOf(-1);
};

// function missingNumber(nums) {
//   let n = nums.length;
//   for (let i = 0; i < nums.length; i++) {
//     n = n ^ nums[i] ^ i;
//   }
//   return n;
// }

let ans = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
console.log(ans);
