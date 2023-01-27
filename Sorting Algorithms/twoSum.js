// var twoSum = function (nums, target) {
//   let indices = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         indices.push(i, j);
//       }
//     }
//   }
//   return indices;
// };

// console.log(twoSum([2, 7, 11, 15], 9));

// var threeSum = function (nums) {
//   let triplet = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       for (let k = i + 2; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           triplet.push([nums[i], nums[j], nums[k]]);
//         }
//       }
//     }
//   }
//   triplet = removeDuplicates(triplet);
//   return triplet;
// };

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

var twoSum = function (nums, target) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hashMap[diff] !== undefined) {
      return [hashMap[diff], i];
    }
    hashMap[nums[i]] = i;
  }
  return;
};
console.log(twoSum([2, 7, 11, 15], 9));
