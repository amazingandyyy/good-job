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
 - Array
name | fnc | time complixity
--- | --- | ---
search |  array[index] |  O(1)
add    |  array.push()  |  O(1)
remove |  array.pop()   | O(1)
unshift(add to the front) |  array.unshift() | O(1)