// Question: https://leetcode.com/problems/number-of-islands/
// explaination: https://www.youtube.com/watch?v=CLvNe-8-6s8

// Idea, do it row by row and column by column
// when we see 1, we increase the island count and make surranded node to be 0, recursively

// DFS

let count = 0;

function numIslands(matrix) {
 for(let i = 0; i< matrix.length; i++){
  for(let j = 0; j< matrix[i].length; j++) {
    if(matrix[i][j] === "1") {
     count++;
     isLand(matrix, i, j);
    }
  }
 }
 return count;
}

function isLand(matrix, i, j) {
  if(matrix[i] && matrix[i][j] == "1") {
    matrix[i][j] = "0";
    isLand(matrix, i, j+1); // right
    isLand(matrix, i-1, j); // top
    isLand(matrix, i, j-1); // left
    isLand(matrix, i+1, j); // bottom
  }
  return;
}

const matrix = [
 ["1","1","0","0","0"],
 ["1","1","0","0","0"],
 ["0","0","1","0","0"],
 ["0","0","0","1","1"]]
const result = numIslands(matrix)
console.log('result', result)