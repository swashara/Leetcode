/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function (s) {
  let resS = [];
  let aFlag = true;
  // for (i = 0; i < s.length; i++) {
  //   if (!s[i] === "a") {
  //     aFlag = false;
  //     break;
  //   }
  // }
  // if (aFlag) {
  //   return s.slice(0, s.length - 1);
  // }
  for (i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      resS[i] = "a";
    } else {
      let code = s.charCodeAt(i);
      resS[i] = String.fromCharCode(code - 1);
      if (resS[i].charCodeAt(0) < s.charCodeAt(i)) {
        return resS.join("") + s.slice(i + 1);
      }
    }
  }
  return resS.join("");
};
let ans = smallestString("cbabc");
console.log(ans);
