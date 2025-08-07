/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// var dailyTemperatures = function (temperatures) {
//   let res = new Array(temperatures.length).fill(0);
//   for (let i = 0; i < temperatures.length; i++) {
//     let l = i + 1;
//     let r = temperatures.length - 1;
//     let count = 0;
//     while (l <= r) {
//       if (temperatures[l] > temperatures[i]) {
//         count++;
//         res[i] = count;
//         break;
//       } else {
//         count++;
//         l++;
//       }
//     }
//   }
//   return res;
// };
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let res = new Array(temperatures.length).fill(0);
  let stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let temp = stack.pop();
      res[temp] = i - temp;
    }
    stack.push(i);
  }
  return res;
};
let ans = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
console.log(ans);
