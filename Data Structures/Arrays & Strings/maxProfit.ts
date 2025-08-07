function maxProfit(prices: number[]): number {
  let maxDiff = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j <= prices.length; j++) {
      if (prices[j] > prices[i]) {
        let diff = prices[j] - prices[i];
        if (diff > maxDiff) {
          maxDiff = diff;
        }
      }
    }
  }
  return maxDiff;
}

let diff = maxProfit([7, 6, 4, 3, 1]);
console.log(diff);
