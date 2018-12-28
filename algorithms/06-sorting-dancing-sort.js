const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
 const length = array.length;
 let [min, temp] = [];
 for(let i=0; i<length; i++) {
  min = i;
  for(let j=i; j<length; j++) {
   if(array[min]>array[j]){
    temp = array[i];
    min = j;
    array[i] = array[min]
    array[j] = temp;
   }
  }
 }
}

selectionSort(numbers);
console.log(numbers);
// space: O(1)
// time: O(N^2)
// [ 0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283 ]