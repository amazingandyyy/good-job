// Breadth First Search/Traversal

const { BinarySearchTree } = require('./10-searching-binary');

class BST extends BinarySearchTree {
	isValidBST(root) {
  return this.check(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
 }
 check(root, min, max) {
  if(!root) return true;
  if(root.value > max || root.value < min) return false;

  return this.check(root.left, min, root.value-1) && this.check(root.right, root.value+1, max);
 }
}

const tree = new BST();
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

console.log(tree.isValidBST(tree.root));
// [ 9, 4, 20, 1, 6, 15, 170 ]

// if we have a wide tree
// the queue may be really big