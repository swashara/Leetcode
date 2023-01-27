/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//   let ans = [];

//   for (i = 0; i < nums.length; i++) {
//     let prod = 1;
//     for (j = 0; j < nums.length; j++) {
//       //   console.log(i, j, nums.length - j);
//       if (i !== j) {
//         prod = prod * nums[j];
//       }
//     }
//     ans[i] = prod;
//   }
//   return ans;
// };

// var productExceptSelf = function (nums) {
//   let ans = [];
//   let prod = 1;

//   for (i = 0; i < nums.length; i++) {
//     prod = prod * nums[i];
//   }
//   for (i = 0; i < nums.length; i++) {
//     ans[i] = prod / nums[i];
//   }
//   return ans;
// };

var productExceptSelf = function (nums) {
  let ans = [];
  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    ans[i] = prefix;
    prefix = prefix * nums[i];
  }
  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] = ans[i] * postfix;
    postfix = postfix * nums[i];
  }
  return ans;
};
console.log(productExceptSelf([1, 2, 3, 4]));
