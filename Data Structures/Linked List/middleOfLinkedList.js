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
class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next ? next : null;
  }
}
const initializeLinkedListFromArray = (array) => {
  if (array.length === 0) {
    return [];
  }
  let head = new Node(array[0]);
  let current = head;
  for (let i = 1; i < array.length; i++) {
    let newNode = new Node(array[i]);
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

let middleNode = function (head) {
  let temp = head;
  let count = 1;

  while (temp.next) {
    temp = temp.next;
    count++;
  }
  console.log(count, "count");
  count = Math.floor(count / 2);
  console.log(count, "count");

  while (count) {
    head = head.next;
    count--;
  }
  return head;
};
let list = [1, 2, 3, 4, 5, 6];
// let list = [1, 2, 3, 4, 5];
let res = middleNode(initializeLinkedListFromArray(list));
printLinkedList(res);
// printLinkedList(middleNode(list));
