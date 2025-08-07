/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let newArr = nums1.concat(nums2);
  newArr = newArr.sort((a, b) => a - b);
  let l = 0;
  let r = newArr.length;
  let median = 0;
  if (r % 2 === 0) {
    let mid = (l + r) / 2;
    median = (newArr[mid] + newArr[mid - 1]) / 2;
  } else {
    let mid = Math.floor((l + r) / 2);
    median = newArr[mid];
  }
  return median.toFixed(5);
};
let ans = findMedianSortedArrays((nums1 = [1, 3]), (nums2 = [2]));
console.log(ans);
