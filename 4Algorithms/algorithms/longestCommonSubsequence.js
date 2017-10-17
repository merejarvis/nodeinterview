/*
  A JavaScript module which resolves the longest common subsequence inside two input strings.  If there is  a subsequence, the longest one is returned.  If there is no common subsequence, -1 is returned.  Adapted from an existing JavaScript implementation of the algorithm.
  Citation: "Algorithm Implementation/Strings/Longest Common Subsequence - Wikibooks, Open Books For An Open World". 2016. En.Wikibooks.Org. https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Longest_common_subsequence#JavaScript.
*/
module.exports = exports = function(s1, s2) {
  //  complete the function
  var arr1 = s1.split('')
  var arr2 = s2.split('')

  for (var i= 0; i<arr1.length; i++){
    for(var j = 0; j<arr2.length; j++){
      if (arr1[i] === arr2[j]) {
        
      }

    }

  }



};
