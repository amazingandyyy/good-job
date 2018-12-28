function findFactorialRecursive(number) {
 if(number <= 1) return number;
 return number*findFactorialRecursive(number-1);
}

let result = 1;
function findFactorialIterative(number) {
 for(let i = number; i>0; i--){
  result = result*i;
 }
 return result;
}

console.log(findFactorialRecursive(6));
console.log(findFactorialIterative(6));