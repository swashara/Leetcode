/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;
  let hashMap = {};
  for (let char of s1) {
    hashMap[char] = (hashMap[char] || 0) + 1;
  }
  let left = 0;
  let right = 0;
  let s1Len = s1.length;

  while (right < s2.length) {
    if (hashMap[s2[right]] > 0) s1Len--;
    hashMap[s2[right]]--;
    right++;

    if (s1Len === 0) return true;
    if (right - left === s1.length) {
      if (hashMap[s2[left]] >= 0) {
        s1Len++;
      }
      hashMap[s2[left]]++;
      left++;
    }
  }
  return false;
};
let ans = checkInclusion((s1 = "ab"), (s2 = "eidbcbvaooo"));
console.log(ans);
