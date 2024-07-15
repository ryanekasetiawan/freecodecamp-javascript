/*
Global vs. Local Scope in Functions
It is possible to have both local and global variables with the same name. 
When you do this, the local variable takes precedence over the global variable.
*/

const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}

console.log(myOutfit());
