function fibonacciIterative(number) {
 // O(N)
 let arr = [0,1];
 for(let i=2;i<number+1;i++) {
  arr.push(arr[i-1]+arr[i-2]);
 }
 return arr[number];
}

function fibonacciRecursive(number) {
 // O(2^N)
 if(number < 2) return number; // index 0 return 0, index 1 return 1;
 return fibonacciRecursive(number-1)+fibonacciRecursive(number-2);
}

// indexes:   0, 1, 2, 3, 4, 5, 6, 7, 8  ...
// fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21...
console.log(fibonacciIterative(10));
console.log(fibonacciRecursive(10));