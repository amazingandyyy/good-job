const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// [1,2,3,5,44,99,...]
function insertionSort(array) {
 for(let i = 0; i<array.length; i++) {
  if(array[i] < array[0]) {
   array.unshift(array.splice(i, 1)[0])
  }else{
   for(let j=i; j>0;i--) {
    if(array[j]<array[i]){
     
    }
   }
  }
 }
}

insertionSort(numbers);
console.log(numbers);
// space: O(1)
// time: O(N^2)
// [ 0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283 ]