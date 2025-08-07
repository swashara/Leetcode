/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function (messages, senders) {
  let res = new Map();
  for (let i = 0; i < messages.length; i++) {
    let wordCount = messages[i].split(" ");
    let count = 0;
    for (let word of wordCount) {
      count++;
    }
    if (res.get(senders[i]) !== undefined) {
      res.set(senders[i], res.get(senders[i]) + count);
    } else {
      res.set(senders[i], count);
    }
  }
  let sortedMap = new Map([...res.entries()].sort((a, b) => b[1] - a[1]));

  console.log(res, sortedMap);
};
let ans = largestWordCount(
  ["How is leetcode for everyone", "Leetcode is useful for practice"],
  ["Bob", "Charlie"]
);
