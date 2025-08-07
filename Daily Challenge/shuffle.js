/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let resArr = [];
  let j = n;
  for (let i = 0; i < n; i++) {
    resArr.push(nums[i]);
    resArr.push(nums[j]);
    j++;
  }
  return resArr;
};
let ans = shuffle([2, 5, 1, 3, 4, 7], 3);
console.log(ans);
