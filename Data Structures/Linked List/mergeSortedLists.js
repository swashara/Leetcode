/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function (list1, list2) {
//   let firstCurr = list1.head;
//   let secondCurr = list2.head;
//   let res = null;
//   while (firstCurr && secondCurr) {
//     if (firstCurr.val < secondCurr.val) {
//       res.head = firstCurr;
//       firstCurr = firstCurr.next;
//     } else {
//       res.head = secondCurr;
//       secondCurr = secondCurr.next;
//     }
//   }
//   if (firstCurr && secondCurr === null) res.next = firstCurr;
//   else if (secondCurr && firstCurr === null) res.next = secondCurr;

//   return res;
// };

var mergeTwoLists = function (list1, list2) {
  let firstCurr = list1;
  let secondCurr = list2;
  const dummy = new ListNode();
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
};
