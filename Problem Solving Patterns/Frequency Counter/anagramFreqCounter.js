// function validAnagram(str1, str2) {
//   // add whatever parameters you deem necessary - good luck!
//   let str1Obj = {};
//   let str2Obj = {};
//   if (str1.length !== str2.length) return false;
//   for (let i = 0; i < str2.length; i++) {
//     let letter = str1[i];
//     str1Obj[letter] ? str1Obj[letter]++ : (str1Obj[letter] = 1);
//   }
//   for (let i = 0; i < str2.length; i++) {
//     let letter = str2[i];
//     str2Obj[letter] ? str2Obj[letter]++ : (str2Obj[letter] = 1);
//   }
//   console.log(str1Obj, str2Obj);
//   for (let i = 0; i < str1.length; i++) {
//     let letter = str1[i];
//     console.log(letter);
//     if (!(str2.includes(letter) && str1Obj[letter] === str2Obj[letter])) {
//       // The includes function makes it to have nested loop. So time complexity will be o(n**2)
//       //   console.log(str2.includes(letter), str1Obj[letter], str2Obj[letter]);
//       return false;
//     }
//     return true;
//   }
// }

// console.log(validAnagram("aaz", "zaa"));

/////////////////////////////////////////////

// function anagramFreqCounter(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   let str1Object = {};
//   let str2Object = {};

//   for (let i = 0; i < str1.length; i++) {
//     str1Object[str1[i]] = (str1Object[str1[i]] || 0) + 1;
//   }
//   for (let i = 0; i < str2.length; i++) {
//     str2Object[str2[i]] = (str2Object[str2[i]] || 0) + 1;
//   }
//   // console.log(str1Object, str2Object);
//   for (let key in str1Object) {
//     if (!(key in str2Object)) return false;
//     if (str1Object[key] != str2Object[key]) return false;
//   }
//   return true;
// }
// console.log(anagramFreqCounter("aazz", "bzaa"));

function anagramFreqCounter(str1, str2) {
  if (str1.length !== str2.length) return false;

  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    lookup[str1[i]] = (lookup[str1[i]] || 0) + 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) return false;
    else lookup[letter] -= 1;
  }
  return true;
}
console.log(anagramFreqCounter("aaz", "zaa"));
