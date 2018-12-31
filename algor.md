# Algorithms

## Resursion

1. Identfiy the base case
2. Identify the recursive case
3. Get closer and closer and return when needed. Usually you have 2 returns.

Theory: Anthing you can do with a recursion can be done interatively

pros & cons:

- Better readability
- Large stack, can be costly
- when it comes to sorting or tree traversal, it becomes really simplier

when to use resursion:

- Everytime you are using a tree or converting something into a tree
 1. devided into number of subproblems that are smaller instances of the same problem.
 2. each instance of the subproblem is identical in nature
 3. the solutions of each subproblem can be combined to solve the problem at hand
- Devide and conquer using recursion

## Sorting

animation [resources](https://www.toptal.com/developers/sorting-algorithms)

### selection sort (dumpest one)

- go thru everything to find the smallest one, then move to search for second smallest one...etc until the last index.
- space: O(1)
- time: O(N^2)

### bubble sort (two-two compare)

- two-two compare, swap when j > j+1, push the larger to the right until hit a much larger one.
- space: O(1)
- time: O(N^2)

### insertion sort (compare the first/previouses)

- if it's smaller then the first one then unshift to the first, otherwise comparing to others previous ones until find the right spot and then swap.
- space: O(1)
- time: O(N^2)

### merge sort (devide an conquer)

![image](https://i.imgur.com/9nxdbYB.png)

- devided to pieces and compare then merge them
- space: O(N)
- time: O(Nlog(N))
- stable

### quick sort