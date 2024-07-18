/*
Accessing Object Properties with Variables

Another use of bracket notation on objects is to access a property which is stored as the value of a variable.
This can be very useful for iterating through an object's properties or when accessing a lookup table.
*/

const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;  
const player = testObj[playerNumber];  
console.log(player);
