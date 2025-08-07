/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let l = 1;
  let r = piles.sort((a, b) => a - b)[piles.length - 1];
  let res = r;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let sum = 0;
    for (let n of piles) {
      sum = sum + Math.ceil(n / mid);
    }
    if (sum <= h) {
      res = Math.min(res, mid);
      r = mid - 1;
    } else if (sum > h) {
      l = mid + 1;
    }
  }
  return res;
};
let ans = minEatingSpeed((piles = [3, 6, 7, 11]), (h = 8));
console.log(ans);
