/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  if(!wordDict || wordDict.length==0) return false;
  if(wordDict.length==1 && s==wordDict[0]) return true;
  const original_string = s;
  s.split(`${s.slice(0,1)}`)
};