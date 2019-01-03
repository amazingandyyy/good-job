// Breadth First Search/Traversal

const { BinarySearchTree } = require('./10-searching-binary');

class BST extends BinarySearchTree {
	breadthFirstSearch() {
		let currentNode = this.root;
		let list = [];
		let queue = [];
		queue.push(currentNode);

		while(queue.length > 0) {
			currentNode = queue.shift();
			list.push(currentNode.value);
			if(currentNode.left) {
				queue.push(currentNode.left)
			}
			if(currentNode.right) {
				queue.push(currentNode.right)
			}
		}
		return list;
	}
	breadthFirstSearchRecursion(queue, list) {
		if(!queue.length) {
			return list;
		}

		let currentNode = queue.shift();
		list.push(currentNode.value);
		if(currentNode.left) {
			queue.push(currentNode.left)
		}
		if(currentNode.right) {
			queue.push(currentNode.right)
		}
		return this.breadthFirstSearchRecursion(queue, list)
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

console.log(tree.breadthFirstSearch());
console.log(tree.breadthFirstSearchRecursion([tree.root], []));
// [ 9, 4, 20, 1, 6, 15, 170 ]

// if we have a wide tree
// the queue may be really big