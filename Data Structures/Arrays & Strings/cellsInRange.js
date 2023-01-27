/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  let fromChar = s[0];
  let fromNum = s[1];
  let toChar = s[3];
  let toNum = s[4];
  let resArray = [];

  for (let i = fromChar.charCodeAt(0); i <= toChar.charCodeAt(0); i++) {
    for (let j = fromNum; j <= toNum; j++) {
      resArray.push(String.fromCharCode(i) + j);
    }
  }
  return resArray;
};

let str = "K1:L2";
let res = cellsInRange(str);
console.log(res);
