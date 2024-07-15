/*
A function can include the return statement but it does not have to.
In the case that the function doesn't have a return statement, when you call it, the function processes the inner code but the returned value is undefined.
*/
let sum = 0;

function addThree() {
  sum = sum + 3;
}


  function addFive () {
    sum += 5;
  }

console.log(addThree());
console.log(addFive());
