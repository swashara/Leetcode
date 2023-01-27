/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  let hashMap = {};
  for (let i = 0; i < strs.length; i++) {
    console.log(typeof strs[i]);
    let word = strs[i].split("").sort();
    hashMap[word] = hashMap[word] || [];
    hashMap[word].push(strs[i]);
  }
  return Object.values(hashMap);
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
