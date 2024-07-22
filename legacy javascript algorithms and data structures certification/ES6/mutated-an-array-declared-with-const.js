/*
Mutate an Array Declared with const

If you are unfamiliar with const, check out this challenge about the const keyword.

The const declaration has many use cases in modern JavaScript.

Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. 
Only in that case, they use let.

However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable.
Using the const declaration only prevents reassignment of the variable identifier.
*/

const s = [5, 7, 2];
function editInPlace() {

    //s.shift();
    //s.shift();
    //s.push(5);
    //s.push(7);

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    
    return s;
}
console.log(editInPlace());
