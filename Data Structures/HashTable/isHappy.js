/**
 * @param {number} n
 * @return {boolean}
 */
/**  //   let splittedN = n.toString();
  //   let outPut = [];
  //   for (let i = 0; i < splittedN.length; i++) {
  //     outPut.push(parseInt(splittedN[i]));
  //   }
  //   console.log(outPut); */
//   let digits = [];
//   while (n) {
//     digits.push(n % 10);
//     n = Math.trunc(n / 10);
//   }
//   digits.reverse();

var isHappy = function (n) {
  if (n < 0) {
    return false;
  }
  let hash = {};
  while (!hash[n]) {
    hash[n] = true;
    let sum = 0;
    while (n > 0) {
      let d = n % 10;
      n = (n - d) / 10;
      sum = sum + d * d;
    }
    if (sum === 1) {
      return true;
    }
    n = sum;
    console.log("n: ", n);
  }
  return false;
};

let n = 97;
console.log(isHappy(n));
