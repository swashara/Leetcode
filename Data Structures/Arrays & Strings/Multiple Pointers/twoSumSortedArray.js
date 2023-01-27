/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let res = [];
  if (numbers.length === 0) return res;

  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      res = [left + 1, right + 1];
      return res;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return res;
};

let res = twoSum([2, 7, 11, 15], 9);
console.log(res);
