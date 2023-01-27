/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  let sum = 0;
  let nArray = Array.from(String(n), Number);
  for (let i = 0; i < nArray.length; i++) {
    if (i % 2 === 0) {
      sum = sum + nArray[i];
    } else {
      sum = sum - nArray[i];
    }
  }
  return sum;
};

let ans = alternateDigitSum(886996);
console.log(ans);
