# good-job

## Big O

- rules
 1. Always worst Case
 2. Remove Constants
 3. Different inputs should have different variables. O(a+b). A and B arrays nested would be O(a*b)
 4. Drop Non-dominant terms O(n+ n^2) ->O(n^2)
- external resource: http://bigocheatsheet.com/

## Handle interview question

- steps
1. Repeat questions, points, input, output
2. Start with the naive/brute force approach
3. Tell them why this approach is not the best, Walk through your approach, Give out a better one
4. Before you start coding, walk through your code and write down the steps you are going to follow.
5. Try to break it
6. Modulizing

## Data Structures

- external resource:
 - [List of data structures](https://en.wikipedia.org/wiki/List_of_data_structures)
 - [Registers and RAM: Crash Course Computer Science #6](https://www.youtube.com/watch?v=fpnE6UAfbtU)
 - [7.4 Computer Memory](http://statmath.wu.ac.at/courses/data-analysis/itdtHTML/node55.html)
- structrues
 - Array(static)

Name | Fnc | Time complixity
--- | --- | ---
search |  array.indexOf() |  O(n)
lookup |  array[index] |  O(1)
append    |  array.push()  |  O(1)
remove |  array.pop()   | O(1)
unshift(add to the front) |  array.unshift('x') | O(n)
splice |  array.splice(2, 0, 'alien)   | O(n)
 
 - Array(Dynamic)

Name | Time complixity
--- | --- | ---
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

 - Hash Table
  - [ ] build your own hash table

Name | Time complixity
--- | --- | ---
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

 - linked list
  - singly linked list

Name | Time complixity
--- | --- | ---
prepend |  O(1)
append  |  O(1)
lookup  |  O(n)
insert  |  O(n)
delete  |  O(n)

  - doubly linked list

Name | Time complixity
--- | --- | ---
prepend |  O(1)
append  |  O(1)
lookup  |  O(n)
insert  |  O(n)
delete  |  O(n)

 - questions
  - [x] Reverse a list