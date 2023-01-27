// var firstMissingPositive = function (nums) {
//   let lookup = {};
//   let min = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     lookup[nums[i]] = true;
//     if (i > 0 && i < nums.length && nums[i - 1] < nums[i]) {
//       min = nums[i - 1];
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (!lookup[nums[i] + 1] && nums[i] + 1 === min + 1 && nums[i] + 1 === 0) {
//       return nums[i] + 1;
//     }
//   }
//   return -1;
// };

// console.log(firstMissingPositive([3, 4, -1, 1]));

var firstMissingPositive = function (nums) {
  let sortedArray = [-1];
  //in this loop I am adding the positive digits into the index that equals to their value.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      sortedArray[nums[i]] = nums[i];
    }
  }
  console.log(sortedArray);
  //then here I am looking for the first empty element of that array which is the answer
  for (let j = 0; j < sortedArray.length; j++) {
    if (!sortedArray[j]) {
      return j;
    }
  }
  return sortedArray.length;
};

console.log(firstMissingPositive([3, 4, -1, 1]));
