//Pure Function

/**
 * 1. For same input, always same result is returned
 * 2. Should not create side effect
 */

function square(n) {
  return n * n;
}

console.log(square(2)); //4
console.log(square(5)); //25

//Impure Function
var result = 0;

function sum(n) {
  result = result + n;
  return result;
}

console.log(sum(5)); //5
console.log(sum(10)); // 15
console.log(sum(5)); // 20
console.log(sum(10)); // 30
