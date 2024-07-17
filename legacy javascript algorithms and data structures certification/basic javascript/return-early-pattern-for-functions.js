/*
Return Early Pattern for Functions

When a return statement is reached, the execution of the current function stops and control returns to the calling location.
*/

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2));
