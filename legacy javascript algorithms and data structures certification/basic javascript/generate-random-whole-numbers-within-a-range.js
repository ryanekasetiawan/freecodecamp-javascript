/*
Generate Random Whole Numbers within a Range

You can generate a random whole number in the range from zero to a given number. 
You can also pick a different lower number for this range.

You'll call your minimum number min and your maximum number max.

This formula gives a random whole number in the range from min to max.
Take a moment to read it and try to understand what this code is doing:

Math.floor(Math.random() * (max - min + 1)) + min
*/

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(10, 50));
