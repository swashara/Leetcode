/**
 * @param {number} num
 * @return {number}
 */
// var minimumSum = function (num) {
//   let numArray = Array.from(String(num));
//   numArray = numArray.sort((a, b) => a - b);
//   let num1 = numArray[0] + numArray[3];
//   let num2 = numArray[1] + numArray[2];
//   let sum = Number(num1) + Number(num2);
//   return sum;
// };
var minimumSum = function (num) {
  let numbers = [];
  for (let i = 0; i < 4; i++) {
    numbers.push(~~num % 10);
    num /= 10;
    console.log(num, numbers);
  }

  const sorted = numbers.sort((a, b) => b - a);
  console.log(sorted);
  return sorted[0] + sorted[1] + 10 * (sorted[2] + sorted[3]);
};
let res = minimumSum(2932);
console.log(res);
