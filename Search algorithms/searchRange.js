/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let lo = 0,
    hi = nums.length - 1,
    start = (end = -1);
  while (lo < hi) {
    let m = lo + Math.floor((hi - lo + 1) / 2);
    if (target < nums[m]) {
      hi = m - 1;
    } else {
      lo = m;
    }
  }

  if (nums[lo] === target) {
    start = lo;
    end = hi;
    while (start > 0) {
      --start;
      if (nums[start] !== target) {
        start = start + 1;
        break;
      }
    }
    while (end < nums.length) {
      ++end;
      if (nums[end] !== target) {
        end = end + 1;
        break;
      }
    }
  }

  return [start, end];
};

const ans = searchRange([5, 7, 7, 8, 8, 10], 8);
console.log(ans);
