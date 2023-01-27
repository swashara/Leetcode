/**
 * @param {number[][]} groups
 * @param {number[]} nums
 * @return {boolean}
 */
var canChoose = function (groups, nums) {
  let numsIndex = 0;
  let groupsIndex = 0;
  while (numsIndex < nums.length && groupsIndex < groups.length) {
    let matchCount = 0;
    while (
      numsIndex + matchCount < nums.length &&
      matchCount < groups[groupsIndex].length &&
      nums[numsIndex + matchCount] === groups[groupsIndex][matchCount]
    ) {
      matchCount++;
    }
    if (matchCount === groups[groupsIndex].length) {
      groupsIndex++;
      numsIndex = numsIndex + matchCount;
    } else {
      numsIndex++;
    }
  }
  return groupsIndex === groups.length;
};

let res = canChoose(
  [
    [1, -1, -1],
    [3, -2, 0],
  ],
  [1, -1, 0, 1, -1, -1, 3, -2, 0]
);
console.log(res);
