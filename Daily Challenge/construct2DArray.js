/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (original.length !== m * n) {
    return [];
  }
  let res = [];
  let arr = [];
  for (let i = 0; i < original.length; i++) {
    arr.push(original[i]);
    if (arr.length === n) {
      res.push(arr);
      arr = [];
    }
  }
  return res;
};
let ans = construct2DArray((original = [1, 2, 3, 4]), (m = 2), (n = 2));
console.log(ans);
