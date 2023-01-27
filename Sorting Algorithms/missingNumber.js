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
let ans = missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
console.log(ans);
