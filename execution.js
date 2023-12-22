console.log(a);
var n = 5; //primitive data
//[0101010 = n : 5][101010100 = x : 6][][][][]
console.log(n);
console.log(x);
var x = n;
//x = 5

x = 6;
// n = 5

//PC Memory
//[1][][5][][3][][][]
// var arr = [1, 2, 3];
// arr[0] = 2
//[2, 2, 2]
// var arr2 = arr
// arr2[0] = 3
//[3, 2,3] -> arr2
// arr = [1, 2,3] //  [3,2,3] -> arr

//[][][1010100101 = square]
console.log(square);
function square(n) {
  var value = n * n;
  return value;
}

console.log(square1);
var squareFn = square
var square1 = square(n);

console.log(square1);

//n is initilaized
//function square is initialized
//calling / execution of the function/ function invocation
//logging the value

//Execution Context

//Creation Phase == Heap Memory
//n = undefined
//x = undefined
//function square = reference
//square1 = undefined

//Execution Phase = Call Stack
//n=5
//x=5
//x=6
//square1 = 36
//36

//Call Stack - Last in First Out (LIFO) 
//Callback queue -  |||||||||| First In First Out (FIFO)
