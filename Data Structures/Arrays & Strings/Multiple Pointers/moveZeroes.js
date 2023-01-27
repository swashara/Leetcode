/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  if (nums.length < 2) return nums;

  let i = 0;
  let j = i + 1;
  while (j < nums.length) {
    if (nums[i] !== 0) {
      i++;
      j++;
    } else if (nums[j] === 0) {
      j++;
    } else {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
  }
  return nums;
};

// var moveZeroes = function (nums) {
//   if (nums.length === 0) return nums;

//   let i = 0;
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] === 0 && nums[j] !== 0) {
//       let temp = nums[i];
//       nums[i] = nums[j];
//       nums[j] = temp;
//       i++;
//     } else if (nums[i] !== 0 && nums[j] === 0) {
//       i++;
//       // j++;
//     }
//   }
//   return nums;
// };

let nums = [1, 0, 1];
// let nums = [0, 1, 0, 3, 12];
console.log(moveZeroes(nums));
