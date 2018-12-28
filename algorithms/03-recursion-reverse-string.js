//Implement a function that reverses a string using iteration...and then recursion!
function reverseStringRecursive(str) {
 if(!str[1]) return str[0];
 // return reverseStringRecursive(str.substr(1)) + str.charAt(0);
 return str[str.length-1]+reverseStringRecursive(str.slice(0, str.length-1))
}

function reverseStringIter(str) {
 let result = '';
 for(let i=str.length; i>0;i--){
  result = result+str[i-1];
 }
 return result;
}

console.log(reverseStringRecursive('yoyo mastery'))
console.log(reverseStringIter('yoyo mastery'))
//should return: 'retsam oyoy'