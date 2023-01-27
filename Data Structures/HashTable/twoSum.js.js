/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let ans = [];
  if (nums.length === 0) return ans;
  //   let hashTbl = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    // hashTbl[nums[i]] = i;
    if (nums.includes(diff) && i !== nums.indexOf(diff)) {
      ans.push(i);
      ans.push(nums.indexOf(diff));
      return ans;
    }
  }

  return ans;
};

let arr = [3, 3];
let target = 6;
let res = twoSum(arr, target);
console.log(res);
