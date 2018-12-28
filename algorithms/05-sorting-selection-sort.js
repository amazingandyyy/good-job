const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
 const length = array.length;
 let [smallest, larger] = [];
 for(let i=0; i<length; i++) {
  smallest = array[i];
  for(let j=i; j<length; j++) {
   if(smallest>array[j]){
    larger = array[i];
    smallest = array[j];
    array[i] = smallest
    array[j] = larger;
   }
  }
 }
}

selectionSort(numbers);
console.log(numbers);
// space: O(1)
// time: O(N^2)
// [ 0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283 ]