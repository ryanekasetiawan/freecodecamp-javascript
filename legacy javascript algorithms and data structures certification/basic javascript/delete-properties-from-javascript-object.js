/*
Delete Properties from a JavaScript Object

We can also delete properties from objects like this:
*/

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog.tails;
delete myDog["bark"];
console.log(myDog);
