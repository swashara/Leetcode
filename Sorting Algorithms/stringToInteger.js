/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let intMin = -(2 ** 31);
  let intMax = 2 ** 31 - 1;
  let isPositive = 0;
  let integer = 0;
  let num = 0;

  if (s.length === 0) return 0;

  if (s[0] === "+") isPositive = true;
  else if (s[0] === "-") isPositive = false;

  for (let i = 0; i < s.length && s[i] >= "0" && s[i] <= "9"; i++) {
    if (s[i] === " ") continue;
    num = num * 10 + (s[i] - "0");

    console.log(num);
  }
  num = isPositive ? num : -num;
  if (num > intMax) return intMax;
  if (num < intMin) return intMin;
  return num;
};

console.log(myAtoi("-123abc"));
