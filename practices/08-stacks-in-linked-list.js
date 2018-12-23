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