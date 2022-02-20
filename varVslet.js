/*
The let keyword was introduced in ES6 (2015).

Variables defined with let cannot be Redeclared.

Variables defined with let must be Declared before use.

Variables defined with let have Block Scope.
 */
let x = 5;
console.log(x);
// let = 7; cannot be redeclared.... 
// but can't be re-assigned
x = 10;
console.log(x);
/*
The const keyword was introduced in ES6 (2015).

Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.
 */
const x = 10;
// const x = 0 can't be use....
// x = 11 can't be use........ 
