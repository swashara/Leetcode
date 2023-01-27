// Brute force incorrect solution
// var removeDuplicates = function (arr) {
//   const setArray = new Set(arr.map((x) => JSON.stringify(x)));
//   const uniqArray = [...setArray].map((x) => JSON.parse(x));
//   return uniqArray;
// };
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

// var threeSum = function (nums) {
//   let triplet = [];
//   nums = nums.sort();
//   for (let i = 0; i < nums.length; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     let l = i + 1;
//     let r = nums.length - 1;
//     while (l < r) {
//       let sum = nums[i] + nums[l] + nums[r];
//       if (sum > 0) {
//         r = r - 1;
//       } else if (sum < 0) {
//         l = l + 1;
//       } else {
//         triplet.push([nums[i], nums[l], nums[r]]);
//         l = l + 1;
//         // This is done so that we do not want to have duplicates in left/right
//         while (nums[l] == nums[l - 1] && l < r) {
//           l = l + 1;
//         }
//       }
//     }
//   }
//   return triplet;
// };

var threeSum = function (nums) {
  let triplet = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        let currentSum = nums[i] + nums[left] + nums[right];
        if (currentSum === 0) {
          triplet.push([nums[i], nums[left], nums[right]]);
          while (nums[left] === nums[left + 1]) left++;
          while (nums[right] === nums[right - 1]) right++;
          left++;
          right--;
        } else if (currentSum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return triplet;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
