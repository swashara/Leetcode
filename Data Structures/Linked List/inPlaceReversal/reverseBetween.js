/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next ? next : null;
  }
}
const linkedListFromArray = (array) => {
  if (array.length === 0) {
    return [];
  }
  let head = new ListNode(array[0]);
  let current = head;
  for (let i = 1; i < array.length; i++) {
    let newNode = new ListNode(array[i]);
    current.next = newNode;
    current = current.next;
  }
  return head;
};

const printLinkedList = (head) => {
  let current = head;
  let printStr = "";
  while (current) {
    printStr += current.val + "-->";
    current = current.next;
  }
  console.log(printStr);
};

var reverseBetween = function (head, left, right) {
  if (left === right) {
    return head;
  }
  let dummy = new ListNode(0);
  dummy.next = head;
  let curr = head;
  let leftPrev = dummy;
  //   1. Reach the node at position "left"
  for (let i = 0; i < left - 1; i++) {
    leftPrev = curr;
    curr = curr.next;
  }
  //   Now curr = node at position left and leftPrev = node before curr

  //   2. Reverse the nodes starting from left to right
  let prev = null;
  for (i = 0; i < right - left + 1; i++) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  //   3. Update pointers
  leftPrev.next.next = curr; // curr is node after the node at right
  leftPrev.next = prev; // prev is node at "right"
  return dummy.next;
};
// let list = [1, 2, 3, 4, 5];
let list = [3, 5];
let res = reverseBetween(linkedListFromArray(list), 1, 2);
printLinkedList(res);
