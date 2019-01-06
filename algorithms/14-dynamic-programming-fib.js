function fib(n) {
 if(n<2) return n;
 return fib(n-1) + fib(n-2);
}

function fibFast() {
 let cache = {};
 return function fib(n) {
  if(cache[n]) return cache[n];
  else{
   if(n<2) return n;
   else {
    cache[n] = fib(n-1) + fib(n-2);
    return cache[n];
   }
  }
 }
}

function fibFaster(n) {
 let answer = [0, 1];
 if(n<2) return answer[n];
 for (let i=2; i <= n ;i++) {
  answer.push(answer[i-2]+answer[i-1]);
 }
 return answer.pop();
}

console.log(fibFast()(100));
console.log(fibFaster(100));
console.log(fib(40));
