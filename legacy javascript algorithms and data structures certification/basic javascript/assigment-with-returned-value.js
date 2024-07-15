/*
Everything to the right of the equal sign is resolved before the value is assigned. 
This means we can take the return value of a function and assign it to a variable.
Assume we have defined a function sum which adds two numbers together.

ourSum = sum(5, 12);

Calling the sum function with the arguments of 5 and 12 produces a return value of 17.
This return value is assigned to the ourSum variable.
*/

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
