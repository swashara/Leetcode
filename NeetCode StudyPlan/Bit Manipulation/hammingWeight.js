/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  return String(n).replace(/0/g, "").length;
};
let ans = hammingWeight((n = "00000000000000000000000000001011"));
console.log(ans);
