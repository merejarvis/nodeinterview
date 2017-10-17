/*
  A JavaScript module which performs a bubble sort on a given array of numbers, ordering the elements from lowest to highest.
*/
module.exports = exports = function(input) {
var z = 0
var swi = false
do{
  for (var i = 0; i< input.length; i++){
    if (input[i]> input[i+1]){
      z = input[i]
      input[i] = input[i+1]
      input[i+1] = z
      swi = true
    }
  }
}while(swi)

  return input
  //  complete the function
}
