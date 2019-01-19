class Node {
 constructor(value, next) {
  this.value = value;
  this.next = null || next;
 }
}

class Stack {
 constructor() {
  this.top = null;
  this.bottom = null;
  this.length = 0;
 }
 peek() {
  // see the top
  return this.top;
 }

 push(value) {
  // add to the top
  const newNode = new Node(value);
  newNode.next = this.top;
  this.top = newNode;
  this.length++;
  if(this.length==1) this.bottom = newNode;
 }

 pop() {
  // get the top out
  const secondNode = this.top.next;
  const theTop = this.top;
  this.top = secondNode;
  this.length--;
  return theTop;
 }

 printList() {
  const result = [];
  let currentNode = this.top;
  result.push('|--')
  while(currentNode){
   result.push(currentNode.value)
   currentNode = currentNode.next;
  }
  result.push('-->|')
  return console.log(result);
 }
}

const myStack = new Stack();
myStack.push(5);
myStack.push(7);
myStack.push(9);
myStack.printList();
myStack.pop();


/**
 * initialize your data structure here.
 */
// var node = function(_value) {
//  let obj = {};
//  obj.value = _value;
//  obj.next = null;
//  return obj;
// }

// var calMin = function(head) {
//  let min = head.value;
//  while(head){
//   if(head.value < min) min = head.value;
//   head = head.next
//  }
//  return min;
// }

// var listStack = function(head) {
//  let list = [];
//  list.push('head');
//  while(head){
//   list.push(head.value);
//   head = head.next
//  }
//  list.push('bottom');
//  return list;
// }


// var MinStack = function() {
//  this.head = null;
//  this.bottom = null;
//  this.min = null;
//  this.length = 0;
// };

// /** 
// * @param {number} x
// * @return {void}
// */
// MinStack.prototype.push = function(x) {
//  let newNode = node(x);
//  newNode.next = this.head;
//  this.head = newNode;
//  this.length++;
//  if(x < this.min || this.min == null) this.min = x;
//  if(this.length == 1) this.bottom = newNode;
// };

// /**
// * @return {void}
// */
// MinStack.prototype.pop = function() {
//  let secondNode = this.head.next;
//  let topNode = this.head;
//  this.head = secondNode;
//  if(topNode.value == this.min) this.min = calMin(this.head);
//  this.length--;
//  return topNode.value;
// };

// /**
// * @return {number}
// */
// MinStack.prototype.top = function() {
//  return this.head.value;
// };

// /**
// * @return {number}
// */
// MinStack.prototype.getMin = function() {
//  return this.min;
// };

// MinStack.prototype.print = function() {
//  return console.log(listStack(this.head));
// };

// /** 
// * Your MinStack object will be instantiated and called as such:
// * var obj = Object.create(MinStack).createNew()
// * obj.push(x)
// * obj.pop()
// * var param_3 = obj.top()
// * var param_4 = obj.getMin()
// */

// var stack = new MinStack();
// stack.push(1)
// stack.push(3)
// stack.push(2)
// stack.push(-2)
// stack.push(-3)
// stack.push(-1)
// stack.print();
// stack.pop()
// stack.print();
// stack.pop()
// stack.print();
// stack.pop()
// stack.print();
// var param_3 = stack.top()
// var param_4 = stack.getMin()
// console.log(param_3, param_4)