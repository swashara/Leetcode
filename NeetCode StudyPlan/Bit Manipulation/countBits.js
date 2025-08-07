/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let res = [];
  for (let i = 0; i <= n; i++) {
    res.push(i.toString(2).replace(/0/g, "").length);
  }
  return res;
};
let ans = countBits((n = 5));
console.log(ans);
