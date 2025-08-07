/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let hash = new Map();
  for (let num of nums) {
    hash[num] = (hash[num] || 0) + 1;
    if (hash[num] > nums.length / 2) {
      return num;
    }
  }
};
let ans = majorityElement([3, 1, 4]);
console.log(ans);
