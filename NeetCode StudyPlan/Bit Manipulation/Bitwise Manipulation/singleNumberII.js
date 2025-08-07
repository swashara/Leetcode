/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var singleNumber = function (nums) {
//   let res = [];
//   let hashMap = {};
//   for (let num of nums) {
//     if (hashMap[num]) {
//       hashMap[num] = hashMap[num] + 1;
//     } else {
//       hashMap[num] = 1;
//     }
//   }
//   for (let ele in hashMap) {
//     if (hashMap[ele] === 1) {
//       res.push(+ele);
//     }
//   }
//   return res;
// };
const singleNumber = function (nums) {
  let xy = 0;
  for (let num of nums) {
    xy = xy ^ num;
  }
  xy = xy & -xy;
  let res = [0, 0];
  for (let num of nums) {
    if (xy & num) {
      res[0] = res[0] ^ num;
    } else {
      res[1] = res[1] ^ num;
    }
  }
  return res;
};
let ans = singleNumber([1, 2, 1, 3, 2, 5]);
console.log(ans);
