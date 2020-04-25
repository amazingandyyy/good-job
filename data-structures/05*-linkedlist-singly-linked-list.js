// 1 --> 10 --> 5 --> 16
class Node {
 constructor(value, next){
  this.value = value
  this.next = next || null
 }
}

class LinkedList{
 constructor(value){
  this.head = new Node(value);
  this.tail = this.head;
  this.length = 1;
 }
 append(value) {
  const newNode = new Node(value);
  this.tail.next = newNode;
  this.tail = newNode;
  this.length++;
  return this.printList();
 }
 prepand(value) {
  const newNode = new Node(value)
  newNode.next = this.head;
  this.head = newNode;
  this.length++;
  return this.printList();
 }
 insertToIndex(index, value) {
  // https://repl.it/@aneagoie/Data-Structures-Linked-Lists-Implementation-4-
  if(!value||index<0) return this.printList();;
  let currentNode = this.head;
  let lastNode = null;
  let _index = 0;

  if(index == 0) {
    this.prepand(value)
    return this.printList();
  };
  if(index >= this.length) {
    this.append(value);
    return this.printList();
  }

  while(currentNode) {
    lastNode = currentNode;
    currentNode = currentNode.next;
    _index++;
    if(_index == index){
     currentNode = new Node(value);
     currentNode.next = lastNode.next;
     lastNode.next = currentNode;
     this.length++;
    }
  }
  return this.printList();
 }
 removeIndex(index) {
  // https://repl.it/@aneagoie/Data-Structures-Linked-Lists-Implementation-4
  if(index==0) {
   this.head = this.head.next;
   this.length --;
   return this.printList();
  }
  
  let _index = 0;
  let currentNode = this.head;
  let lastNode = null;
  while(currentNode) {
   lastNode = currentNode;
   currentNode = currentNode.next;
   _index++;
   if(_index==index){
    lastNode.next = currentNode.next;
    this.length --;
   }
  }
  return this.printList();
 }
 reverse() {
    // see 07
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

const myLinkedList = new LinkedList(0);
myLinkedList.append(5); // 10 --> 5
myLinkedList.append(16); // 10 --> 5 --> 16
myLinkedList.prepand(1); // 1 --> 10 --> 5 --> 16
myLinkedList.insertToIndex(2, 77); // 1 --> 10 --> 77 --> 5 --> 16
myLinkedList.insertToIndex(6, 99); // 1 --> 10 --> 77 --> 5 --> 16 --> 99
myLinkedList.insertToIndex(0, 9); // 9 --> 1 --> 10 --> 77 --> 5 --> 16 --> 99
myLinkedList.removeIndex(0); // 1 --> 10 -> 77 --> 5 --> 16 --> 99