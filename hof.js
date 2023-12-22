//Higher Order Function

/**
 * 1. Function should be passed as an argument in another function
 * 2. Function should be returned from another function
 */

//Type-1  : Function taking another function as argument but not returning the function
function myHigherOrderFunction(myGivenFunction, number1, number2) {
  var executeFunction = myGivenFunction(number1, number2); //9

  //not returning any function
  return executeFunction;
}

function myAddFunction(n1, n2) {
  return n1 + n2;
}

var myValue = myHigherOrderFunction(myAddFunction, 5, 4);

// console.log(myValue);

//HOF = Higher Order Function
function myAnotherHOF(myRandomFunction) {
  return myRandomFunction;
}

function add(n1, n2) {
  return n1 + n2;
}

console.log(myAnotherHOF(add(1, 2)));
