/**
 * @param {number[]} nums
 * @return {number}
 */

// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// var thirdMax = function (nums) {
//   let max = nums[0];
//   let maxIndex = 0;

//   nums = removeDuplicates(nums);
//   console.log(nums);

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//       maxIndex = i;
//     }
//   }
//   nums.splice(maxIndex, 1);

//   max = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//       maxIndex = i;
//     }
//   }
//   nums.splice(maxIndex, 1);

//   max = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//       maxIndex = i;
//     }
//   }

//   return max;
//   //   return thirdMax;
// };

var thirdMax = function (nums) {
  nums = nums.sort((a, b) => b - a);
  let n = nums.length;
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i < n - 1 && nums[i] === nums[i + 1]) {
      continue;
    }
    nums[j++] = nums[i];
  }
  if (j < 3) {
    return nums[0];
  } else {
    return nums[2];
  }
};
console.log(thirdMax([1, 2, 3, 4, 5, 6]));
