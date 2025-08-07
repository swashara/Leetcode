/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let absX = Math.abs(x).toString().split("").reverse().join("");
  if (absX > 2 ** 32) {
    return 0;
  } else {
    return absX * Math.sign(x);
  }
};
let ans = reverse((x = 123));
console.log(ans);
