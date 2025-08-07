var canConstruct = function (ransomNote, magazine) {
  const hMap = new Map();
  for (let c of magazine) {
    hMap[c] = (hMap[c] || 0) + 1;
  }

  for (let c of ransomNote) {
    if (!hMap[c] || hMap[c] <= 0) {
      return false;
    }
    hMap[c]--;
  }
  return true;
};

const ans = canConstruct("aa", "aab");
console.log(ans);
