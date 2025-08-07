/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let hash = {};
  words.sort();
  for (let word of words) {
    if (hash[word]) {
      hash[word] = hash[word] + 1;
    } else {
      hash[word] = 1;
    }
  }
  return Object.entries(hash)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0, k)
    .map((a) => a[0]);
};
let ans = topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3);
console.log(ans);
