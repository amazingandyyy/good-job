// Breadth First Search/Traversal

const { BinarySearchTree } = require('./10-searching-binary');


class BST extends BinarySearchTree {
 DFSInorder() {
  return traverseInOrder(this.root, []);
 }
 DFSPostorder() {
  return traversePostOrder(this.root, []);
 }
 DFSPreorder() {
  return traversePreOrder(this.root, []);
 }
}

//     9
//  4     20
//1  6  15  170

function traverseInOrder(node, list) {
 // Inorder - [1, 4, 6, 9, 15, 20, 170]
 // console.log(node.value);
 if(node.left){
  traverseInOrder(node.left, list);
 }
 list.push(node.value);
 if(node.right){
  traverseInOrder(node.right, list);
 }
 return list;
}
function traversePostOrder(node, list) {
 // Postorder - [1, 6, 4, 15, 170, 20, 9]
 if(node.left){
  traversePostOrder(node.left, list);
 }
 if(node.right){
  traversePostOrder(node.right, list);
 }
 list.push(node.value);
 return list;
}
function traversePreOrder(node, list) {
 // Preorder - [9, 4, 1, 6, 20, 15, 170]
 list.push(node.value);
 if(node.left){
  traversePreOrder(node.left, list);
 }
 if(node.right){
  traversePreOrder(node.right, list);
 }
 return list;
}

const tree = new BST();
tree.insert(9);
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log('Inorder', tree.DFSInorder()); // [1, 4, 6, 9, 15, 20, 170 ]
console.log('Postorder', tree.DFSPostorder()); // [ 1, 6, 4, 15, 170, 20, 9 ]
console.log('Preorder', tree.DFSPreorder()); // [ 9, 4, 1, 6, 20, 15, 170 ]
//     9
//  4     20
//1  6  15  170

// Inorder - [1, 4, 6, 9, 15, 20, 170]
// Postorder - [1, 6, 4, 15, 170, 20, 9]
// Preorder - [9, 4, 1, 6, 20, 15, 170]

// console.log(tree.depthFirstSearch());
// console.log(tree.depthFirstSearchRecursion([tree.root], []));

// if we have a wide tree
// the queue may be really big