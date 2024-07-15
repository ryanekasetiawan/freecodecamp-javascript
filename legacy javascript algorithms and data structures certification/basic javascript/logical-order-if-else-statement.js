/*
Logical Order in If Else Statements

Order is important in if, else if statements.
The function is executed from top to bottom so you will want to be careful of what statement comes first.
*/

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(3));
console.log(orderMyLogic(7));
console.log(orderMyLogic(17));
