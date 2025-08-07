/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function (scores, ages) {
  let n = scores.length;
  const ageScorePair = new Array(n);
  for (let i = 0; i < n; i++) {
    ageScorePair[i] = [ages[i], scores[i]];
  }
  ageScorePair.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  const dp = new Array(n).fill(0);
  let maxScore = 0;
  for (let i = 0; i < n; i++) {
    dp[i] = ageScorePair[i][1];
    for (let j = 0; j < i; j++) {
      if (ageScorePair[i][1] >= ageScorePair[j][1]) {
        dp[i] = Math.max(dp[i], ageScorePair[i][1] + dp[j]);
      }
    }
    maxScore = Math.max(maxScore, dp[i]);
  }
  return maxScore;
};
// let ans = bestTeamScore([1, 3, 5, 10, 15], [1, 2, 3, 4, 5]);
let ans = bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1]);
console.log(ans);
