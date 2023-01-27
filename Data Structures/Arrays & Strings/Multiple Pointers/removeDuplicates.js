/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   if (nums.length === 0) return nums;

//   let i = 0;
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] === nums[j]) {
//       nums[j] = "_";
//       i++;
//     } else {
//       let temp = nums[i];
//       nums[i] = nums[j];
//       nums[j] = temp;
//     }
//     console.log(nums);
//   }
//   return nums;
// };
// var removeDuplicates = function (nums) {
//   if (nums.length === 0) return nums;

//   let i = 0;
//   let j = i + 1;
//   while (j < nums.length) {
//     if (nums[i] === nums[j]) {
//       nums[j] = "_";
//       i++;
//       j++;
//     } else {
//       let temp = nums[i];
//       nums[i] = nums[j];
//       nums[j] = temp;
//       // i++;
//       j++;
//     }
//   }
//   return nums;
// };

var removeDuplicates = function (nums) {
  if (nums.length === 0) return nums;

  let i = 0;
  let j = i + 1;
  while (j < nums.length) {
    if (nums[i] === nums[j]) {
      nums[j] = "_";
      i++;
      j++;
    } else {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      // i++;
      j++;
    }
  }
  return nums;
};

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let nums = [0, 0, 1, 1, 1];
console.log(removeDuplicates(nums));
