/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let set = new Set();
  let resSet = new Set();
  for (let i = 0; i < s.length; i++) {
    let pattern = s.slice(i, i + 10);
    if (set.has(pattern)) {
      resSet.add(pattern);
    } else {
      set.add(pattern);
    }
  }
  return [...resSet];
};
let ans = findRepeatedDnaSequences("AAAAAAAAAAAAA");
console.log(ans);
