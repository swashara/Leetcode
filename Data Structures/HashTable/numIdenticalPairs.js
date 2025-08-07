/**
 * @param {number[]} nums
 * @return {number}
 */
// var numIdenticalPairs = function (nums) {
//   let count = 0;
//   //   let resArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         // resArr.push([i, j]);
//         count++;
//       }
//     }
//   }
//   //   console.log(resArr);
//   return count;
// };
var numIdenticalPairs = function (nums) {
  let count = 0;
  let map = {};
  for (let num of nums) {
    if (map[num]) {
      count = count + map[num];
      map[num] = map[num] + 1;
    } else {
      map[num] = 1;
    }
  }
  return count;
};
let ans = numIdenticalPairs([1, 2, 3, 1, 1, 3]);
console.log(ans);
