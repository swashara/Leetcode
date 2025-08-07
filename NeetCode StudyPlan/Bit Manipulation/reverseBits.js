/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let strN = n.toString(2).split("").reverse().join("").padEnd(32, "0");
  let reversedN = parseInt(strN, 2);
  return reversedN;
};
let ans = reverseBits((n = "11111111111111111111111111111101"));
console.log(ans);
