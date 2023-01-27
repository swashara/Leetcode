/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    hash[num] ? (hash[num] += 1) : (hash[num] = 1);
  }
  let res = Object.keys(hash).sort((a, b) => (hash[a] <= hash[b] ? 1 : -1));
  console.log(res);
  // .splice(0, k);
  return res;
};

let res = topKFrequent([4, 1, -1, 2, -1, 2, 3], 2);
// console.log(res);
