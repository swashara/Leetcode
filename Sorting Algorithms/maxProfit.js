/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let min = prices[0];
//   let minIndex = 0;
//   let maxProf = 0;
//   for (i = 0; i < prices.length - 1; i++) {
//     for (j = i + 1; j < prices.length; j++) {
//       let diff = prices[j] - prices[i];
//       if (diff > maxProf) {
//         maxProf = diff;
//       }
//     }
//   }
//   return maxProf;
// };
// console.log(maxProfit([3, 2, 6, 5, 0, 3]));

var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let maxProf = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let diff = prices[right] - prices[left];
      if (diff > maxProf) maxProf = diff;
    } else {
      left = right;
    }
    right++;
  }
  return maxProf;
};
console.log(maxProfit([3, 2, 6, 5, 0, 3]));
