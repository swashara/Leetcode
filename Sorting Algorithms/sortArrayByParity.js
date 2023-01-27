/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      res.push(nums[i]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      res.push(nums[i]);
    }
  }
  return res;
};

console.log(sortArrayByParity([1, 2, 3, 4, 5, 0]));
