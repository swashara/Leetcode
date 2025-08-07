/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  const truster = Array(N).fill(0); // keep track of count of people this person trusts
  const trustee = Array(N).fill(0); // keep track of count of people that trust this person

  for (let i = 0; i < trust.length; i++) {
    let [a, b] = trust[i];
    a--; //get indexes correct
    b--;

    truster[a]++;
    trustee[b]++;
  }

  for (let i = 0; i < N; i++) {
    if (truster[i] == 0 && trustee[i] == N - 1) {
      return i + 1;
    }
  }

  return -1;
};
let ans = findJudge(3, [
  [1, 3],
  [2, 3],
]);
console.log(ans);
