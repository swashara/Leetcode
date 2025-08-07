/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let splitS = s.split(" ");
  let res = Array(splitS.length);
  for (let i = 0; i < splitS.length; i++) {
    let index = splitS[i].slice(-1);
    res[index - 1] = splitS[i].slice(0, splitS[i].length - 1);
  }
  let stringRes = res.join(" ");

  return stringRes;
};
let ans = sortSentence("is2 sentence4 This1 a3");
console.log(ans);
