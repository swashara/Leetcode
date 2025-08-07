/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let maxProfit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let diff = prices[right] - prices[left];
      maxProfit = Math.max(diff, maxProfit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
};
let ans = maxProfit((prices = [7, 1, 5, 3, 6, 4]));
console.log(ans);
