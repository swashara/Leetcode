var checkIfPangram = function (sentence) {
  if (sentence.length < 26) {
    return false;
  }
  let a = 97;
  let charArray = {};
  for (let i = 0; i < 26; i++) {
    charArray[String.fromCharCode(a + i)] = 0;
  }
  for (let letter of sentence) {
    if (charArray[letter]) {
      charArray[letter] = charArray[letter] + 1;
    } else {
      charArray[letter] = 1;
    }
  }
  //   console.log(charArray);
  let values = Object.values(charArray);
  if (values.includes(0)) {
    return false;
  } else {
    return true;
  }
};
let ans = checkIfPangram(
  "leetcodeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
);

console.log(ans);
