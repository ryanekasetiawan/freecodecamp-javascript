/*
Chaining If Else Statements
if/else statements can be chained together for complex logic.
*/

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }

}

console.log(testSize(3));
console.log(testSize(7));
console.log(testSize(13));
console.log(testSize(17));
console.log(testSize(27));
