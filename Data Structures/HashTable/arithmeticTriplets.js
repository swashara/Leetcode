/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  if (nums.length === 0) {
    return 0;
  }

  let count = 0;
  let hash = new Map();
  for (let num of nums) {
    let sum = num - diff;
    if (hash.has(sum) && hash.has(sum - diff)) {
      count++;
    }
    hash.set(num, true);
  }
  console.log(hash);
  return count;
};
let nums = [0, 1, 4, 6, 7, 10];
let diff = 3;
let res = arithmeticTriplets(nums, diff);
console.log(res);
