/*
Updating Object Properties

After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable.
You can use either dot or bracket notation to update.
*/

const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

console.log(myDog.name = "Happy Coder");
console.log(myDog["tails"] = 2);
