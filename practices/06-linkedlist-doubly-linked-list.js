class Node {
 constructor(value, prev, next){
 this.value = value;
  this.prev = prev || null;
  this.next = next || null;
 }
}

class DoublyLinkedList {
 constructor(value) {
  this.head = new Node(value);
  this.tail = this.head;
  this.length = 1;
 }
 append(value) {
  const newNode = new Node(value);
  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;
  this.length++;
  return this.printList();
 }
 prepend(value) {
  const newNode = new Node(value);
  newNode.next = this.head;
  this.head.prev = newNode;
  this.head = newNode;
  this.length++;
  return this.printList();
 }
 insertToIndex(index, value) {
  if(index==0) {
   this.prepend(value)
   return this.printList()
  };
  if(index>=this.length){
   this.append(value)
   return this.printList();
  }
  
  const newNode = new Node(value);
  const lastNode = this.jumpToIndex(index-1);
  const holdingNode = lastNode.next;
  newNode.next = holdingNode;
  holdingNode.prev = newNode;
  lastNode.next = newNode;
  newNode.prev = lastNode;
  this.length++;
  return this.printList();
 }
 removeIndex(index, value) {
  if(index==0) {
   const secondNode = this.head.next;
   this.head = secondNode;
   this.length--;
   return this.printList();
  }
  if(index >= this.length-1){
   const lastSecondNode = this.tail.prev;
   this.tail = lastSecondNode;
   this.tail.next = null;
   this.length--;
   return this.printList();
  }
  const lastNode = this.jumpToIndex(index-1);
  const holdingNode = lastNode.next.next;
  lastNode.next = holdingNode;
  holdingNode.prev = lastNode;
  this.length--;
  return this.printList();
 }
 jumpToIndex(index){
  let currentNode = this.head;
  let counter = 0;
  while(counter !== index){
    currentNode = currentNode.next;
    counter++;
  }
  return currentNode;
 }
 printList() {
  const array = [];
  let currentNode = this.head;
  while(currentNode!==null){
   array.push(currentNode.value);
   currentNode = currentNode.next;
  }
  console.log(array, this.length);
  return array;
 }
}
const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5); // [10,5]
myDoublyLinkedList.append(16); // [10,5,16]
myDoublyLinkedList.insertToIndex(2, 88);
myDoublyLinkedList.removeIndex(2);  // [10,5,88,16]
myDoublyLinkedList.append(32); // [10,5,16,32]
myDoublyLinkedList.removeIndex(2);  // [10,5,32]
myDoublyLinkedList.removeIndex(5);  // [10,5]