// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// it should return 2
// Given an array = [2,1,1,2,3,4,1,2,2,4]
// it should return 1
// Given an array = [2,3,4,5]
// it should return undefined

function firstRecurringChar(array){
 const map = {};
 for(item of array) {
  if(map[item]==undefined){
   map[item]=1
  }else{
   return item;
  }
 }
 return undefined;
}


console.log(firstRecurringChar([2,1,1,2,3,4,1,2,2,4]));