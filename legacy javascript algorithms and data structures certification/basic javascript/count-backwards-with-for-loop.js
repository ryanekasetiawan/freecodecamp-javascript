/*
Count Backwards With a For Loop

A for loop can also count backwards, so long as we can define the right conditions.

In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.
*/

const myArray = [];

for (let i = 9; i > 0; i-=2)
{
  myArray.push(i);
}
