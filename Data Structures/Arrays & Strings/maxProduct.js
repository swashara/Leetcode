/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxProduct = 0;
  if (nums.length !== 0) {
    let firstMax = nums[0];
    let firstMaxIndex = 0;
    let secondMax = nums[0];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > firstMax) {
        firstMax = nums[i];
        firstMaxIndex = i;
      }
    }
    for (let i = 0; i < nums.length; i++) {
      if (i === firstMaxIndex) continue;

      if (nums[i] > secondMax) {
        secondMax = nums[i];
      }
    }
    maxProduct = (firstMax - 1) * (secondMax - 1);
    return maxProduct;
  } else {
    return maxProduct;
  }
};

let nums = [0];
let res = maxProduct(nums);
console.log(res);
