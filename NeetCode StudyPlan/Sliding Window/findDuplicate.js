/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let numsSet = new Set();

  for (let num of nums) {
    if (!numsSet.has(num)) {
      numsSet.add(num);
    } else {
      return num;
    }
  }
};
let ans = findDuplicate((nums = [1, 3, 4, 2, 2]));
console.log(ans);
