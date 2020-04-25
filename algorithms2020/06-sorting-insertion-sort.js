function sort(arr) {
  for(let i=0; i<arr.length; i++) {
     if(arr[i]<arr[0]){
       arr.unshift(arr.splice(i, 1)[0])
     }else{
       for(let j=i; j>0; j--) {
        if(arr[i] > arr[j-1] && arr[i] < arr[j]) {
          // j is the index
          // move i item to j (remove i's from old position)
          arr.splice(j, 0, arr.splice(i, 1)[0])
        }
       }
     }
  }
  console.log('arr', arr)
  return arr;
}

sort([5,24,45,3,12,67,94,35,28,85,76])
