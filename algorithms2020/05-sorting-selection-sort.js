function sort(arr) {
  const length = arr.length;
  // iterate thru the list
  // find the smallest number
  for(let i=0;i<arr.length;i++) {
    let tempIndex = i;
    for(let j=i;j<arr.length;j++) {
      if(arr[j]<arr[tempIndex]) tempIndex=j;
    }
    // swap tempIndex and i
    let temp = arr[i];
    arr[i] = arr[tempIndex];
    arr[tempIndex] = temp;
  }
  return arr;
}






function sortS(arr) {
  for(let i = 0; i< arr.length; i++) {
    let smallestIndex = i;
    for(let j = i; j< arr.length; j++) {
      if(arr[j]<arr[smallestIndex]) smallestIndex = j;
    }
    let temp = arr[i];
    arr[i] = arr[smallestIndex];
    arr[smallestIndex] = temp;
  }
  return arr;
}

console.log(sortS([5,24,45,3,12,67,94,35,28,85,76]))
