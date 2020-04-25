# Algorithms 2020

## Sorting

### Bubble sort

O(N^2) time, N(1) space

bubble up the largest(N), then bubble up the second largest...until it's sorted(N), bubbling up means comparing the current one with the next one, if the current one is smaller, then skip to next one and comparing next one and the one next to next one, otherwise, swap current and next one.

### Selection sort

O(N^2) time, N(1) space

go thru the list and find the smallest number(N), then swap it to the first place of the list, then go thru the list again starting from the second one, and find the second smallest number, then swap it to the second place of the list...until it's all sorted(N)

### Insertion sort

O(N)(nearly sorted) or O(N^2)  time, N(1) space

start from first one and just leave it where it is, then move to second one, then comparing second and the first one, swap if second one is smaller than the first one, then move to third one, then comparing third with all the item on the left side, swap until it's larger than the left one and smaller than the right one, keep doing it until it's all in the right place.

it's pretty fast when the list is ALMOST sorted

### Merge sort

O(N*log(N)) time, N(O) space

Divide & Conquer pattern, it's safe since it when the value is the same, the order will stay the same.

1. divide the list by half and half again until it's all one item

2. then compare one and two, three and four, five and six, ...etc, two items at once as a pair

3. then comparing and doing insert with two pairs

### Quick sort

O(N*log(N))

Divide & Conquer pattern


