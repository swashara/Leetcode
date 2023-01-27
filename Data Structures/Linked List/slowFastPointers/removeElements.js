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
var removeElements = function (head, val) {
  if (!head) return head;
  while (head && head.val === val) {
    head = head.next;
  }
  let curr = head;
  let prev = null;

  while (curr) {
    let next = curr.next;
    if (curr.val === val) {
      prev.next = next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return head;
};
let list = [3, 2, 0, -4];
let res = removeElements(linkedListFromArray(list), 1);
printLinkedList(res);
