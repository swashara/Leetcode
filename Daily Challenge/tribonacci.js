/**
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function (n) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1 || n === 2) {
//     return 1;
//   }
//   return tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1);
// };
// let tribonacci = function (n) {
//   if (n < 2) {
//     return n;
//   }
//   let a = 0;
//   let b = 1;
//   let c = 1;
//   if (n > 2) {
//     n = n - 2;
//   }
//   while (n--) {
//     let d = a + b + c;
//     [a, b, c] = [b, c, d];
//   }
//   return c;
// };
// let tribonacci = function (n) {
//   if (n === 0) {
//     return n;
//   }
//   if (n === 1 || n === 2) {
//     return 1;
//   }
//   let tribArr = [];
//   tribArr[0] = 0;
//   tribArr[1] = 1;
//   tribArr[2] = 1;
//   for (let i = 3; i <= n; i++) {
//     tribArr[i] = tribArr[i - 3] + tribArr[i - 2] + tribArr[i - 1];
//   }
//   return tribArr[n];
// };

// let fibonacii = function (n) {
//   if (n === 0) {
//     return n;
//   }
//   if (n === 1 || n === 2) {
//     return 1;
//   }
//   let fibArr = [];
//   fibArr[0] = 0;
//   fibArr[1] = 1;
//   fibArr[2] = 1;
//   for (let i = 3; i <= n; i++) {
//     fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
//   }
//   return fibArr[n];
// };
let fibonacii = function (n) {
  const helper = (num, memo = [undefined, 1, 1]) => {
    if (memo[num] !== undefined) return memo[num];
    let res = helper(num - 2, memo) + helper(num - 1, memo);
    memo[num] = res;
    console.log(memo);
    return res;
  };
  let ans = helper(n);
  return ans;
};

// let ans = tribonacci(7);
let ans = fibonacii(6);
console.log(ans);
