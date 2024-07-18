/*
Accessing Object Properties with Bracket Notation

The second way to access the properties of an object is bracket notation ([]). 
If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.
*/

const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj["an entree"];  
const drinkValue = testObj["the drink"];    
console.log(entreeValue);
console.log(drinkValue);
