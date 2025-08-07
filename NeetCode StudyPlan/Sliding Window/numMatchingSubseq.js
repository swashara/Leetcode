/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let res = 0;

  for (let word of words) {
    if (isSubseq(s, word)) {
      res++;
    }
  }
  return res;
};
function isSubseq(s, word) {
  let idx = -1;
  for (let c of word) {
    let found = s.indexOf(c, idx + 1);
    if (found === -1) {
      return false;
    }
    idx = found;
  }
  return true;
}
let ans = numMatchingSubseq((s = "abcde"), (words = ["a", "bb", "acd", "ace"]));
console.log(ans);
