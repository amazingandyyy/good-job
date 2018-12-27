class Stack {
 constructor() {
  this.array = []
 }
 peek() {
  // see the top
  return this.array[this.array.length-1]
 }

 push(value) {
  return this.array.push(value);
 }

 pop() {
  return this.array.pop()
 }

 printList() {
  return console.log(this.array);
 }
}

const myStack = new Stack();
myStack.push(5);
myStack.push(7);
myStack.push(9);
myStack.printList();
console.log(myStack.peek());
console.log(myStack.pop());
myStack.printList();