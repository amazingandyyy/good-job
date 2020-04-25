function sort(arr) {
  for(let i=0;i<arr.length;i++) {
    for(let j=0; j<arr.length; j++) {
      if(arr[j]>arr[j+1]){
        // swap
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

let t = 0;
function optSort(arr) {
  for(let i=0;i<arr.length-1;i++) {
    for(let j=0; j<arr.length-i-1; j++) {
      t++
      if(arr[j]>arr[j+1]){
        // swap
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  console.log(arr, t)
  return arr;
}

function sortB(arr) {
  for(let j =0;j<arr.length;j++) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i]>arr[i+1]) {
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
  }
  return arr;
}

console.log(sortB([5,24,45,3,12,67,94,35,28,85,76]))