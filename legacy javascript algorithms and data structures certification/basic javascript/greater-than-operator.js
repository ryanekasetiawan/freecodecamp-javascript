/*
Comparison with the Greater Than Operator

The greater than operator (>) compares the values of two numbers. 
If the number to the left is greater than the number to the right, it returns true. 
Otherwise, it returns false.

Like the equality operator, the greater than operator will convert data types of values while comparing.

Examples
5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
*/

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }

  if (val > 10) {
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(9));
console.log(testGreaterThan(15));
console.log(testGreaterThan(110));
