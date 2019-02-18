// QUEUE
// FIFO

class Node {
 constructor(value, next) {
  this.value = value;
  this.next = null || next;
 }
}

  class Queue {
 // fifo
 constructor() {
  this.first = null;
  this.last = null;
  this.length = 0;
 }
 peek() {
  // see the top
  return this.first;
 }

 enqueue(value) {
  // add a new one in waitlist
  const newNode = new Node(value);
  const lastNode = this.last;
  if(lastNode){
   this.last.next = newNode;
   this.last = newNode;
  }else{
   this.last = newNode;
   this.first = newNode;
   newNode.next = newNode;
  }
  this.length++
 }

 dequeue() {
  // get the first out
  const firstNode = this.first;
  const secondNode = this.first.next;
  this.first = secondNode;
  this.length--;
  return firstNode;
 }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);