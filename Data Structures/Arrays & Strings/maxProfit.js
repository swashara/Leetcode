var maxProfit = function (prices) {
  let l = 0;
  let r = 1;
  let maxP = 0;
  while (r < prices.length) {
    if (prices[r] > prices[l]) {
      let p = prices[r] - prices[l];
      if (p > maxP) {
        maxP = p;
      }
    } else {
      l = r;
    }
    r = r + 1;
  }
  return maxP;
};

const ans = maxProfit([7, 6, 4, 3, 1]);
console.log(ans);

// let maxDiff = 0;
// for (let i = 0; i < prices.length - 1; i++) {
//   for (let j = i + 1; j <= prices.length; j++) {
//     if (prices[j] > prices[i]) {
//       let diff = prices[j] - prices[i];
//       if (diff > maxDiff) {
//         maxDiff = diff;
//       }
//     }
//   }
// }
// return maxDiff;
