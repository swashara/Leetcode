/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let wordS = s.split("").sort().join("");
  let wordT = t.split("").sort().join("");
  if (wordS === wordT) {
    return true;
  }
  return false;
};

console.log(isAnagram("anagram", "nagaram"));
