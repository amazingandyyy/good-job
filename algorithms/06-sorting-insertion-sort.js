const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// [1,2,3,6,44,99,...]
function insertionSort(array) {
 for(let i = 0; i<array.length; i++) {
  if(array[i] < array[0]) {
   //move number to the first position
   array.unshift(array.splice(i, 1)[0])
  }else{
   for(let j=i; j>0; j--) {
    //find where number should go
    if(array[i]>array[j-1] && array[i]<array[j]){
     //move number to the right spot
     let item = array.splice(i,1)[0]; // already chop off the item from the list
     array.splice(j,0,item); // place it
    }
   }
  }
 }
}

insertionSort(numbers);
console.log('numbers', numbers);
// space: O(1)
// time: O(N^2)
// [ 0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283 ]