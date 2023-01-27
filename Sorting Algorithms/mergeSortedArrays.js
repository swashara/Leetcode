/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function (nums1, m, nums2, n) {
//   let temp = 0;
//   for (let i = 0; i < m + n; i++) {
//     for (j = 0; j < n; j++) {
//       if (nums2[j] <= nums1[i]) {
//         nums1[i] = nums2[j];
//       } else {
//         nums1[i] = nums1[i];
//       }
//     }
//   }
//   nums1 = nums1 + nums2;
//   return nums1;
// };
var merge = function (nums1, m, nums2, n) {
  for (let i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }
  nums1 = nums1.sort(function (a, b) {
    return a - b;
  });

  return nums1;
};

console.log(merge([4, 2, 1], 3, [4, 5, 6], 3));
