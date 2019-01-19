
function findEndIndex(height, start) {
  let max = 0;
  let next_index = -1;
  for(let i = start+1; i < height.length; i++) {
    if(height[i] >= height[start]){
      return i;
    }else if(max <= height[i]) {
      max = height[i];
      next_index = i;
    }
  }
  return next_index;
}

function fillUp(height, start, end){
  let h = Math.min(height[start], height[end]);
  let counter = 0;
  for(let i = start+1; i<end; i++){
    counter += (h - height[i]);
  }
  return counter;
}

var trap = function(height) {
  let start_index = 0;
  let counter = 0;

  while(true){
    let next_index = findEndIndex(height, start_index)
    if(next_index < 0) return counter;

    counter += fillUp(height, start_index, next_index);
    start_index = next_index;
  }
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));