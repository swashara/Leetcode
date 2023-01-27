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
 * @param {ListNode} list1
 * @return {ListNode}
 */
/*
 * 1. Create a dummy node
 * 2. Create previous node
 * 3. Traverse the linked list and compare previous node to the current node
 * 4. if curr node is greater than prev node then make dummy node to point to the current node. Connect previous node to curr.next
 */
// var removeNodes = function (head) {
//   if (!head) {
//     return head;
//   }

//   let prev = head;
//   let curr = head;
//   let currRes = [];

//   while (curr) {
//     if (curr.val > prev.val) {
//       currRes.push(curr.val);
//     }
//     prev = curr;
//     curr = curr.next;
//   }
//   if (currRes.length === 0) {
//     return head;
//   } else {
//     return linkedListFromArray(currRes);
//   }
// };

var removeNodes = function (head) {
  if (!head) {
    return head;
  }
  let stk = [];
  let curr = head;
  let res = null;
  while (curr) {
    while (stk.length && curr.val > stk[stk.length - 1]) {
      stk.pop();
    }
    stk.push(curr.val);
    curr = curr.next;
  }
  while (stk.length) {
    res = new ListNode(stk.pop(), res);
  }
  return res;
};
let list1 = [5, 2, 13, 3, 8];
let res = removeNodes(linkedListFromArray(list1));
printLinkedList(res);
// console.log(res);
