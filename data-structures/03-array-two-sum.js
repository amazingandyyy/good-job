/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// O(n^2)
// var twoSum = function(nums, target) {
//     for(let i=0 ; i<nums.length; i++) {
//         for(let j=0 ; j<nums.length; j++) {
//             if(i!==j && nums[i] + nums[j]===target) {
//                 return [i, j]
//             }
//         }
//     }
// 		return [];
// };

// BETTER O(n)
var twoSum = function(nums, target) {
	let map = {};
	for(let j=0 ; j<nums.length; j++) {
if(map[nums[j]]==undefined){
	map[target-nums[j]] = j;
}else{
	return [map[nums[j]],j]
}
	}
return [];
};

twoSum([2, 7, 11, 15], 9);