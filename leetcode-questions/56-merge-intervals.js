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
  intervals.sort((a, b) => a.start - b.start);
  let mergeList = new Array();
  let i = 0;
  while(i < intervals.length) {
    let itv = new Interval(intervals[i].start, intervals[i].end);
    while(++i < intervals.length && itv.end >= intervals[i].start) {
      itv.end = intervals[i].end > itv.end ? intervals[i].end:itv.end;
    }
    mergeList.push(itv);
  }

  return mergeList;
};

console.log(merge([new Interval(1, 3), new Interval(2, 6), new Interval(8, 10), new Interval(15, 18)]));