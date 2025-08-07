/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let res = [];
  let max = 2 ** n;
  for (let i = 0; i < max; i++) {
    res.push(i);
  }
  return res;
};
let ans = grayCode(2);
console.log(ans);
