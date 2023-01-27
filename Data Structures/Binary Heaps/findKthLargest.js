/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function (nums, k) {
//   nums = nums.sort(function (a, b) {
//     return b - a;
//   });
//   return nums[k - 1];
// };
// // let arr = [3, 2, 1, 5, 6, 4];
// let arr = [3, 2, 3, 1, 2, 4, 5, 5, 6];
// let res = findKthLargest(arr, 4);
// console.log(res);

let findKthLargest = function (nums, k) {
  let maxHeap = new MaxPriorityQueue();
  for (let num of nums) {
    maxHeap.enqueue(num);
  }
  while (k > 1) {
    maxHeap.dequeue();
    k--;
  }
  return maxHeap.front().element;
};

let res = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
console.log(res);
