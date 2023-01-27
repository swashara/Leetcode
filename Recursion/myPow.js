/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function (x, n) {
//   let res = 1;
//   if (n < 0) {
//     n = Math.abs(n);
//     x = 1 / x;
//     for (let i = 1; i <= n; i++) {
//       res = res * x;
//     }
//   } else {
//     for (let i = 1; i <= n; i++) {
//       res = res * x;
//     }
//   }
//   return res;
// };
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }
  if (n < 0) {
    return 1 / myPow(x, Math.abs(n));
  }
  if (n % 2 === 0) {
    return myPow(x * x, n / 2);
  }

  return x * myPow(x, n - 1);
};
let ans = myPow(2.0, -2);
console.log(ans);
