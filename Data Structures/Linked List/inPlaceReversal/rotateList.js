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
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var rotateRight = function (head, k) {
//   let dummy = new ListNode(0);
//   dummy.next = head;
//   let leftPrev = dummy;
//   let curr = head;
//   let count = 0;
//   while (curr) {
//     count++;
//     curr = curr.next;
//   }
//   if(k>count){
//     k = k%count
// console.log(k)  }

//   curr = head;
//   for (let i = 0; i < (count - k) + 1; i++) {
//     leftPrev = curr;
//     curr = curr.next;
//   }
//   let newCurr = head;
//   let newPrev = null;
//   for(let i=count-k; i>0; i--){
//     newPrev = newCurr;
//     newCurr = newCurr.next;
//   }
//   newPrev.next = null
//   leftPrev.next.next = head;
//   head = leftPrev
//   return head;
// };
// let list = [1, 2, 3, 4, 5];
// var rotateRight = function (head, k) {
//   if (!head) {
//     return head;
//   }
//   let length = 1;
//   let tail = head;
//   while (tail.next) {
//     tail = tail.next;
//     length++;
//   }
//   k = k % length;
//   if (k === 0) {
//     return head;
//   }
//   let curr = head;
//   for (let i = 1; i < length - k; i++) {
//     curr = curr.next;
//   }
//   let newHead = curr.next;
//   curr.next = null;
//   tail.next = head;
//   return newHead;
// };

var rotateRight = function (head, k) {
  if (!head) {
    return head;
  }
  let tail = head;
  let length = 1;
  while (tail.next) {
    tail = tail.next;
    length++;
  }
  k = k % length;
  if (k === 0) {
    return head;
  }
  let curr = head;
  for (let i = 0; i < length - k - 1; i++) {
    curr = curr.next;
  }
  // console.log(curr);
  let newHead = curr.next;
  curr.next = null;
  tail.next = head;
  return newHead;
};
let list = [1, 2, 3, 4, 5];
let res = rotateRight(linkedListFromArray(list), 2);
printLinkedList(res);
