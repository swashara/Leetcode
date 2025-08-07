/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {
  let res = 0;
  if (mainTank === 1) {
    return 10;
  }

  while (mainTank - 5 > 4) {
    if (additionalTank >= 1) {
      res = res + 10;
      additionalTank--;
    }
    res = res + 5 * 10;
    mainTank = mainTank / 5;
  }
  return res;
};
let ans = distanceTraveled((mainTank = 11), (additionalTank = 2));
console.log(ans);
