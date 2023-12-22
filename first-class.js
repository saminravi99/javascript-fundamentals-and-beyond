function myFunction(numberFunction) {
  //number : parameter
  //   console.log(numberFunction());
  function myConsole() {
    return numberFunction();
  }
  //   var getNumber = myConsole()

  return myConsole;
}

function getNumber() {
  return 4;
}

const myGetNumber = getNumber;

// myFunction(myGetNumber)(); //4 : argument

const myNumber = myFunction(myGetNumber);
const myActualNumber = myNumber();

/**
 * 1. Function can be assigned to a variable
 * 2. Function can be passed as an argument in another function
 * 3. Function can be returned from another function
 * 4. Function can be stored in data structure like array, object etc
 */

const myFunctionArray = [
  getNumber,
  myFunction,
  function (greet) {
    console.log(greet);
  },
];

const myFunctionObj = {
  myPrivateNumber: getNumber,
  calculateNUmber: function (n) {
    console.log(n + n);
  },
};

console.log(myFunctionObj.calculateNUmber(5));
console.log(myFunctionArray[2]("Hello World"));
