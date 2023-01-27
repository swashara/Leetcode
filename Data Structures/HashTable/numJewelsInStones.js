/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let hashTable = {};
  let count = 0;
  for (let j of jewels) {
    hashTable[j] = true;
  }
  for (let s of stones) {
    if (hashTable[s]) {
      count++;
    }
  }
  return count;
};
let jewels = "aA";
let stones = "aAAbbbb";
let res = numJewelsInStones(jewels, stones);
console.log(res);
