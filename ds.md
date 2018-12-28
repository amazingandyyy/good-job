# Data Structures

- external resource:
 - [List of data structures](https://en.wikipedia.org/wiki/List_of_data_structures)
 - [Registers and RAM: Crash Course Computer Science #6](https://www.youtube.com/watch?v=fpnE6UAfbtU)
 - [7.4 Computer Memory](http://statmath.wu.ac.at/courses/data-analysis/itdtHTML/node55.html)

## Array

### Array(static)

Name | Fnc | Time complixity
--- | --- | ---
search |  array.indexOf() |  O(n)
lookup |  array[index] |  O(1)
append    |  array.push()  |  O(1)
remove |  array.pop()   | O(1)
unshift(add to the front) |  array.unshift('x') | O(n)
splice |  array.splice(2, 0, 'alien)   | O(n)
 
### Array(Dynamic)

Name | Time complixity
--- | ---
lookup |  O(1)
append |  O(1) or O(n)
insert |  O(n)
delete |  O(n)

  - questions
   - [x] Reverse a String
   - [x] Merge Two Sorted Arrays
   - [x] Two Sum
   - [ ] Maximum Subarray
   - [ ] Move Zeroes
   - [ ] Contains Duplicate
   - [ ] Rotate Array

## Hash Table
  - [ ] build your own hash table

Name | Time complixity
--- | ---
lookup |  O(1)
append |  O(1)
insert |  O(1)
keys   |  O(n)

 - use hashtable to optimize something
 - pros and cons
  - fast lookups, more memery usage;
  - fast inserts
  - flexible keys
  - it's unordered
  - slow key iteration

## linked list

### singly linked list

Name | Time complixity
--- | ---
prepend |  O(1)
append  |  O(1)
lookup  |  O(n)
insert  |  O(n)
delete  |  O(n)

### doubly linked list

Name | Time complixity
--- | ---
prepend |  O(1)
append  |  O(1)
lookup  |  O(n)
insert  |  O(n)
delete  |  O(n)

 - questions
  - [x] Reverse a list

## Stacks and Queues

### Stacks - plates

- LIFO(last in, first out)

Name | Time complixity
--- | ---
lookup |  O(n)
pop    |  O(1)
push   |  O(1)
peek   |  O(1)

### Queues - waiting line

- FIFO(first in, first out)

Name | Time complixity
--- | ---
lookup     |  O(n)
enqueue    |  O(1)
dequeue    |  O(1)
peek       |  O(1)

- questions
  - [x] stack using ll
  - [x] stack using array
  - [x] queue using ll
  - [x] queue using stacks

## Tree

- Binary tree
  - perfect binary tree
  - full binary tree
  - binary search tree ([BST](https://visualgo.net/bn/bst))

Name | Time complixity
--- | ---
lookup    |  O(log N)
insert    |  O(log N)
delete    |  O(log N)

  - questions
    - [x] insert
    - [x] lookup
    - [x] remove
    - [ ] max
    - [ ] min
    - [ ] isBalanced

  - Balanced BST (don't need to know how to write it, but need to know how to explain it)
    - AVL Tree
    - Red Black Tree

  - Heap
   - binary heap

Name | Time complixity
--- | ---
lookup    |  O(N)
insert    |  O(log N)
delete    |  O(log N)

  - Trie
   - faster searching for strings, ip address ... etc

## Graph

- directed graph (only one direction between nodes)
- undirected graph
- weighted graph
- unweighted graph
- cyclic (circle)
- acyclic
- DAG(directed acyclic graph)