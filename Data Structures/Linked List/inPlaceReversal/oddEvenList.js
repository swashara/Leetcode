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
var oddEvenList = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let curr = head;
  let prev = dummy;
  let evenArr = [];
  let oddArr = [];
  while (curr) {
    if (curr.val % 2 === 0) {
      evenArr.push(curr.val);
    } else {
      oddArr.push(curr.val);
    }
    prev = curr;
    curr = curr.next;
  }
  let oddList = linkedListFromArray(oddArr);
  let evenList = linkedListFromArray(evenArr);
  let res = new ListNode(0);
  let currOdd = res;
  while (oddList) {
    currOdd.next = oddList;
    oddList = oddList.next;
  }
  currOdd.next = evenList;
  console.log(oddList);

  return linkedListFromArray(res);
};
let list1 = [1, 2, 3, 4, 5];
let res = oddEvenList(linkedListFromArray(list1));
printLinkedList(res);
// console.log(res);
