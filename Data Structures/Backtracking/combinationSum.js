/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  candidates.sort((a, b) => a - b);
  const backtrack = (start, current, total) => {
    if (total === target) {
      result.push([...current]);
      return;
    }
    if (total > target) {
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      current.push(candidates[i]);
      backtrack(i, current, total + candidates[i]);
      current.pop();
    }
  };
  backtrack(0, [], 0);
  return result;
};
const ans = combinationSum([2, 3, 6, 7], 7);
console.log(ans);
