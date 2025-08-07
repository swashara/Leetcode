/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let prev = null;
  for (let i = 0; i < lists.length; i++) {
    prev = merge2Lists(prev, lists[i]);
  }
  return prev;
};
function merge2Lists(list1, list2) {
  let firstCurr = list1;
  let secondCurr = list2;
  let dummy = new ListNode(0);
  let tail = dummy;
  while (firstCurr && secondCurr) {
    if (firstCurr.val <= secondCurr.val) {
      tail.next = firstCurr;
      firstCurr = firstCurr.next;
    } else {
      tail.next = secondCurr;
      secondCurr = secondCurr.next;
    }
    tail = tail.next;
  }
  tail.next = firstCurr || secondCurr;
  return dummy.next;
}
let ans = mergeKLists(
  (lists = [
    [1, [4, 5]],
    [1, 3, 4],
    [2, 6],
  ])
);
console.log(ans);
