class Node {
 constructor(value) {
  this.left = null;
  this.right = null;
  this.value = value;
 }
}

class BinarySearchTree {
 constructor() {
  this.root = null;
 }
 insert(value) {
  const newNode = new Node(value);
  if (this.root === null) {
   this.root = newNode;
   return;
  }

  let currentNode = this.root;
  while (currentNode) {
   if (value < currentNode.value) {
    if (!currentNode.left) {
     currentNode.left = newNode;
     return;
    }
    currentNode = currentNode.left;
   } else {
    if (!currentNode.right) {
     currentNode.right = newNode;
     return;
    }
    currentNode = currentNode.right;
   }
  }
 }
 lookup(value) {
  let currentNode = this.root;
  while (currentNode) {
   if (value === currentNode.value) return currentNode;
   else if (value < currentNode.value) currentNode = currentNode.left;
   else if (value > currentNode.value) currentNode = currentNode.right;
  }
  return null;
 }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

//     9
//  4     20
//1  6  15  170

// console.log(tree.lookup(16));
// console.log(tree.lookup(20));

module.exports = {
 Node,
 BinarySearchTree
}