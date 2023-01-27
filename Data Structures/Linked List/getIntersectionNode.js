/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let l1 = headA;
  let l2 = headB;
  //     if l1 is of length i and l2 is of length j then both the lists become null after i+j nodes. If there's an intersection then they could meet before i+k nodes.
  while (l1 !== l2) {
    l1 = l1 === null ? headB : l1.next;
    l2 = l2 === null ? headA : l2.next;
  }
  //When there is no intersection, at some point, both the lists point to null. Break out of the while loop then
  return l1;
};
