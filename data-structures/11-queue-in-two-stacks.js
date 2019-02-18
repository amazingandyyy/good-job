class StackStackQueue {
 constructor() {
  this.first = [];
  this.last = [];
 }

 enqueue(value) {
   const length = this.last.length;
   for (let i = 0; i < length; i++) {
     this.first.push(this.last.pop());
   }
   this.first.push(value);
   return this;
 }

 dequeue() {
   const length = this.first.length;
   for (let i = 0; i < length; i++) {
     this.last.push(this.first.pop());
   }
   this.last.pop();
   return this;
 }
 peek() {
   if (this.first.length > 0) {
     return this.first[0];
   }
   return this.last[this.last.length - 1];
 }
}

const myQueue = new StackStackQueue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Pavel2');
myQueue.enqueue('Pavel3');
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.peek());