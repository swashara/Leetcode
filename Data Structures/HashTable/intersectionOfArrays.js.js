/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function (nums1, nums2) {
//   let result = [];
//   if (nums1.length === 0 || nums2.length === 0) return result;
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       if (nums1[i] === nums2[j] && !result.includes(nums1[i])) {
//         result.push(nums1[i]);
//         // i++;
//       }
//     }
//   }
//   return result;
// };

var intersection = function (nums1, nums2) {
  let result = [];
  let hs = {};
  if (nums1.length === 0 || nums2.length === 0) return result;
  for (let i = 0; i < nums1.length; i++) {
    hs[i] = nums1[i];
  }
  for (let i = 0; i < nums2.length; i++) {
    if (hs[nums2[i]] && !result.includes(nums1[i])) {
      result.push(nums2[i]);
    }
  }
  return result;
};

let arr1 = [2, 1];
let arr2 = [1, 2];
let res = intersection(arr1, arr2);
console.log(res);
