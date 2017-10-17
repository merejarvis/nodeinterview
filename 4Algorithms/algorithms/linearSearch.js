/*
  A JavaScript module which performs a linear search for a given value inside an input array.  If the specified value is found, the index of the element in the array with that value is returned.  If the specified value is not found in the array -1 is returned.
*/
module.exports = exports = function(input, value) {
  if (value){
    for (var k = 0; k<input.length; k++){
      if (value.toString() === input[k].toString()){
        return k
      }
    }
  }
  else{
    for (var j = 0; j<input.length; j++){
      if (value === input[j]){
        return j
      }
    }
  }
  return -1
};
