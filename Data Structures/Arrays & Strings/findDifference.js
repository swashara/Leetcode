/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let answer = [[], []];
  for (let ele of nums1) {
    if (!nums2.includes(ele)) {
      answer[0].push(ele);
    }
  }
  for (let ele of nums2) {
    if (!nums1.includes(ele)) {
      answer[1].push(ele);
    }
  }
  return answer;
};
let ans = findDifference([1, 2, 3, 3], [1, 1, 2, 2]);
console.log(ans);
