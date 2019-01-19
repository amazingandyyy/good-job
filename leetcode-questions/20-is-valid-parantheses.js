/**
 * @param {string} s
 * @return {boolean}
 */

const matching = {
 '(': ')',
 '[': ']',
 '{': '}'
}
// var node = function(val) {
//  this.value = val;
//  this.next = null;
// }
// var isValid = function(s) {
//  const chars = s.split('');
//  let waiting;
//  for(c of chars) {
//   if(matching[c]){
//    let holding = waiting;
//    waiting = new node(matching[c]);
//    waiting.next = holding;
//   }else{
//    if(waiting && waiting.value==c){
//     waiting = waiting.next;
//    }else{
//     return false;
//    }
//   }
//  }
//  if(waiting) return false;
//  return true;
// };
function isValid(string){
 let stack = [];

 for(let i = 0; i < string.length; i++) {
  let char = string[i];
  if(matching[char]){
   stack.push(matching[char]);
  }else{
   if(char !== stack.pop()){
    return false
   }
  }
 }
 return stack.length == 0;
}

console.log(isValid("()([]"))
console.log(isValid("()[]"))