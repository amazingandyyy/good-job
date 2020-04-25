const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) return array
  // Split Array in into right and left
  const middle = Math.floor(array.length/2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  
  //  log(N), divide by 2
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
 const result = [];
 while(left.length && right.length) {
  //  O(N)
  if(left[0] < right[0]) result.push(left.shift());
  else result.push(right.shift());
 }
 return result.concat(left).concat(right);
}


const answer = mergeSort(numbers);
console.log(answer);