/*
Testing Objects for Properties

To check if a property on a given object exists or not, you can use the .hasOwnProperty() method.
someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.
*/

function checkObj(obj, checkProp) {
  let found = obj.hasOwnProperty(checkProp);
  if (!found) {
    return "Not Found";
  }
  return obj[checkProp];
}
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"));
