/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
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

const reverseLinkedList = (head) => {
  let curr = head;
  let prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  //   return head;
  return prev;
};

var isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  //   Find the middle of the linkedList
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  //   Reverse the second half
  let curr = slow;
  let prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  //   Check the two halves
  let left = head;
  let right = prev;
  //   Loop until the right pointer reaches the middle of the linkedList, when it hits the middle that's when it becomes null
  while (right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;
};

let list = [];
let res = isPalindrome(linkedListFromArray(list));
console.log(res);
