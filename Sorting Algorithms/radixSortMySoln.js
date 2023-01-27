function getDigit(num, place) {
  let digit = 0;
  let stringifiedNum = num.toString();
  // for (let i = stringifiedNum.length - 1; i >= 0; i--) {
  for (let i = 0; i <= stringifiedNum.length - 1; i++) {
    console.log(`${stringifiedNum[i]} is in ${i} place`);
  }
  return digit;
}

getDigit(12345, 4);
