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
     lastNode=currentNode;
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
    // two two swap, until the last pair;
     if(this.head.next==null) return this.head;
     let first = this.head;
     let second = first.next;
     this.tail = first;
     while(second!=null) {
       const temp = second.next;
       second.next = first;
       first = second;
       second = temp;
     }
     this.tail.next = null;
     this.head = first;
     return this.printList();
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
for(let i = 1; i<10; i++) {
  myLinkedList.append(i);
} // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

myLinkedList.reverse(); // [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]