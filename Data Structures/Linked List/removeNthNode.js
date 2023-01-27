/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
//   let curr = head;
//   let prev = null;
//   if (!head) return;
//   while (curr) {
//     let temp = curr;
//     curr.next = prev;
//     prev = curr;
//     curr = temp;
//   }
//   let count = 0;
//   head = prev;
//   curr = head;
//   while (count !== n) {
//     count++;
//     let prev = curr;
//     curr = curr.next;
//     if (count === n) {
//       prev.next = curr.next;
//       curr = null;
//       break;
//     }
//   }
//   let curr = head;
//   let prev = null;
//   while (curr) {
//     let temp = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = temp;
//   }
//   return prev;
// };
// var removeNthFromEnd = function (head, n) {
//   if (!head) return;
//   let left = head;
//   let right = head;
//   for (let i = 1; i <= n; i++) {
//     right = right.next;
//   }
//   let dummy = new ListNode(0, head);
//   let prev = dummy;
//   while (right) {
//     prev = left;
//     left = left.next;
//     right = right.next;
//   }
//   prev.next = left.next;
//   left = null;
//   return dummy.next;
// };
var removeNthFromEnd = function (head, n) {
  if (!head) return;
  let left = head;
  let right = head;
  for (let i = 1; i <= n; i++) {
    right = right.next;
  }
  let dummy = new ListNode(0, head);
  while (right) {
    left = left.next;
    right = right.next;
  }
  left.next = left.next.next;
  return dummy.next;
};
