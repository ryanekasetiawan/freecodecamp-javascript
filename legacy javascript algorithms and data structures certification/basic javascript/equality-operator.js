/*
Comparison with the Equality Operator

There are many comparison operators in JavaScript. 
All of these operators return a boolean true or false value.

The most basic operator is the equality operator ==. 
The equality operator compares two values and returns true if they're equivalent or false if they are not. 
Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.
*/

function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));
console.log(testEqual(12));
