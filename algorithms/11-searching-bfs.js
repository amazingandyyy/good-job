// Breadth First Search/Traversal

const { BinarySearchTree } = require('./10-searching-binary');

class BST extends BinarySearchTree {
	// doesn't matter if it's balanced or not
	breadthFirstSearch() {
		let currentNode = this.root;
		let list = [];
		let queue = [];
		
		// push the currentNode first
		queue.push(currentNode);
		
		// do the checking until no more children in the queue
		while(queue.length > 0) {
			// get the first in the queue out
			// shift = leftpop;
			currentNode = queue.shift();

			// do something to the value
			list.push(currentNode.value);
			// keep going
			// checking left child FIRST
			if(currentNode.left) {
				// if it has left child, push to queue
				queue.push(currentNode.left)
			}
			if(currentNode.right) {
				// if it has right child, push to queue
				queue.push(currentNode.right)
			}
		}
		return list;
	}
	breadthFirstSearchRecursion(queue, list) {
		if(!queue.length) {
			// if the no more child in the queue
			// return the result
			return list;
		}
		// take the first one
		let currentNode = queue.shift();  
		// use the value
		list.push(currentNode.value);

		// keep going
		// checking left child FIRST
		if(currentNode.left) {
			// if it has left child, push to queue
			queue.push(currentNode.left)
		}
		if(currentNode.right) {
			// if it has left child, push to queue
			queue.push(currentNode.right)
		}
		// recurring call the function with
		// queue and the result list
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