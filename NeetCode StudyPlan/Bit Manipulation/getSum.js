/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b !== 0) {
    const [sum, carry] = [a ^ b, (a & b) << 1];
    a = sum;
    b = carry;
  }
  return a;
};
let ans = getSum((a = 5), (b = 1));
console.log(ans);
