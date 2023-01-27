/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */ class ListNode {
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
var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  let pointer = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      while (slow !== pointer) {
        slow = slow.next;
        pointer = pointer.next;
      }
      return pointer;
    }
  }
  return null;
};
let list = [3, 2, 0, -4];
let res = detectCycle(linkedListFromArray(list));
console.log(res);
