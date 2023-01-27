// function squaredValue(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) return false;
//     else arr1.splice(correctIndex);
//   }

//   return true;
// }
// let arr1 = [1, 2, 3];
// let arr2 = [4, 1, 9];
// console.log(squaredValue(arr1, arr2));

function squaredValue(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let i = 0; i < arr1.length; i++) {
    freqCounter1[arr1[i]] = (freqCounter1[arr1[i]] || 0) + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    freqCounter2[arr2[i]] = (freqCounter2[arr2[i]] || 0) + 1;
  }
  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) return false;
    if (freqCounter1[key] !== freqCounter2[key ** 2]) return false;
  }
  return true;
}
let arr1 = [1, 2, 3, 3];
let arr2 = [4, 1, 9, 9];
console.log(squaredValue(arr1, arr2));
