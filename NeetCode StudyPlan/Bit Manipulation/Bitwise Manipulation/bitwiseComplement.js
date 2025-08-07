/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  let bitCount = 0;
  let num = n;
  while (num > 0) {
    num = num >> 1;
    bitCount++;
  }
  let allBitsSet = Math.pow(2, bitCount) - 1;
  return n ^ allBitsSet;
};

let ans = bitwiseComplement(5);
console.log(ans);
