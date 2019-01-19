// https://leetcode.com/problems/merge-intervals/
// https://zxi.mytechroad.com/blog/geometry/leetcode-56-merge-intervals/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */

function Interval(start, end) {
  this.start = start;
  this.end = end;
}
var merge = function (intervals) {
  let result = new Array;
  if(intervals.length==0) return result;
  intervals.sort((a, b) => a.start - b.start);
  for(itv of intervals) {
    if(result.length == 0 || itv.start > result[result.length-1].end) {
      result.push(itv);
    }else{
      result[result.length-1].end = Math.max(itv.end, result[result.length-1].end);
    }
  }
  return result;
};

console.log(merge([new Interval(1, 3), new Interval(2, 6), new Interval(8, 10), new Interval(15, 18)]));