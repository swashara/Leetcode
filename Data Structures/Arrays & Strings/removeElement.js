/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    } else {
      continue;
    }
  }

  return nums;
};

const ans = removeElement([3, 2, 2, 3], 3);
console.log(ans);
