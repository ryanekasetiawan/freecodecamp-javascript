/*
Profile Lookup

We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
*/

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Loop through each contact in the array
  for (let i = 0; i < contacts.length; i++) {
    // Check if the firstName matches the given name
    if (contacts[i].firstName === name) {
      // Check if the property exists in the contact
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  // If the name does not match any contact
  return "No such contact";
}

// Test cases
console.log(lookUpProfile("Akira", "likes")); // Output: ["Pizza", "Coding", "Brownie Points"]
console.log(lookUpProfile("Harry", "number")); // Output: "0994372684"
console.log(lookUpProfile("Sherlock", "likes")); // Output: ["Intriguing Cases", "Violin"]
console.log(lookUpProfile("Kristian", "address")); // Output: "No such property"
console.log(lookUpProfile("John", "likes")); // Output: "No such contact"
