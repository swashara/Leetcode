// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let str1Freq = {};
//   let str2Freq = {};
//   for (let i = 0; i < str1.length; i++) {
//     str1Freq[str1[i]] = (str1Freq[i] || 0) + 1;
//   }
//   for (let i = 0; i < str2.length; i++) {
//     str2Freq[str2[i]] = (str2Freq[i] || 0) + 1;
//   }
//   for (let i in str1Freq) {
//     if (!str2Freq[i]) {
//       return false;
//     }
//     if (str1Freq[i] !== str2Freq[i]) {
//       return false;
//     }
//   }
//   return true;
// }

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let lookup = {};
  for (let i of str1) {
    lookup[i] ? (lookup[i] += 1) : (lookup[i] = 1);
  }
  for (let i of str2) {
    if (!lookup[i]) {
      return false;
    } else {
      lookup[i] -= 1;
    }
  }
  return true;
}

let str1 = "absdfdsdfc";
let str2 = "absdfdsdfe";
let res = validAnagram(str1, str2);
console.log(res);
