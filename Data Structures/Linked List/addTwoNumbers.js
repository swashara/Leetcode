/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
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
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let curr = dummy;
  let v1 = 0;
  let v2 = 0;
  let sum = 0;
  let carry = 0;
  while (l1 || l2 || carry) {
    v1 = l1 ? l1.val : 0;
    v2 = l2 ? l2.val : 0;

    sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;

    curr.next = new ListNode(sum);
    curr = curr.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return dummy.next;
};

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
let res = addTwoNumbers(linkedListFromArray(l1), linkedListFromArray(l2));
printLinkedList(res);
