console.log("Hello world");

function main() {
  //Global Scope

  var door = "PVC Door";
  var n = 5;

  function myFunction() {
    let a = 5;
    console.log(door);
    console.log(c);

    // {

    // }
    console.log(b);
    if (3 < 5) {
      console.log(a);
      let b = "Bangladesh";
      console.log(b);
      console.log(c);
      function myAnotherFunction2() {
        
        console.log(a);
        console.log(b);
        let c = [1, 2, 3];
        console.log(c);
      }

      console.log(c);
    } //Block scope

    console.log(b);
  }
  // console.log(b);

  function myAnotherFunction() {
    var d = 34;
    console.log(a);
  }

  myFunction();
}
