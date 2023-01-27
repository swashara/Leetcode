/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  if (s.length === 0) return 0;
  let hashTbl = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      if (s[i + 1] === "V") {
        res = res + 4;
        i++;
      } else if (s[i + 1] === "X") {
        res = res + 9;
        i++;
      } else {
        res = res + hashTbl[s[i]];
      }
    } else if (s[i] === "X") {
      if (s[i + 1] === "L") {
        res = res + 40;
        i++;
      } else if (s[i + 1] === "C") {
        res = res + 90;
        i++;
      } else {
        res = res + hashTbl[s[i]];
      }
    } else if (s[i] === "C") {
      if (s[i + 1] === "D") {
        res = res + 400;
        i++;
      } else if (s[i + 1] === "M") {
        res = res + 900;
        i++;
      } else {
        res = res + hashTbl[s[i]];
      }
    } else {
      res = res + hashTbl[s[i]];
    }
  }
  return res;
};

let s = "MCMXCIV";
let res = romanToInt(s);
console.log(res);
