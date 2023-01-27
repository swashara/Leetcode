/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
  const isMatch = (word) => {
    let i = 0;
    for (let char of word) {
      if (i < pattern.length && char === pattern.charAt(i)) {
        i++;
      } else if (char < "a") {
        return false;
      }
    }
    return i === pattern.length;
  };

  let res = [];
  for (let i = 0; i < queries.length; i++) {
    res.push(isMatch(queries[i]));
  }
  return res;
};

let ans = camelMatch(
  ["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"],
  "FoBaT"
);
console.log(ans);
