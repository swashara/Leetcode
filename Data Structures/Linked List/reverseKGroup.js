/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
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

function moveToEnd(head, k) {
  while (head && k > 1) {
    head = head.next;
    k--;
  }
  return head;
}
function reverseList(head, stop) {
  let prev = stop;
  while (head !== stop) {
    let temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }
  return prev;
}
var reverseKGroup = function (head, k) {
  let dummy = new ListNode(0, head);
  let prevGroupTail = dummy;

  while (head) {
    let groupStart = head;
    let groupEnd = moveToEnd(head, k);
    if (!groupEnd) {
      break;
    }
    prevGroupTail.next = reverseList(groupStart, groupEnd.next);
    prevGroupTail = groupStart;
    head = prevGroupTail.next;
  }
  return dummy.next;
};

let ans = reverseKGroup(linkedListFromArray((head = [1, 2, 3, 4, 5])), (k = 2));
printLinkedList(ans);
