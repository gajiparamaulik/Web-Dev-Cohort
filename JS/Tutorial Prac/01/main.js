// Variables

// DataType varName =  value; Strongly Typed Language
// JS Loosely Typed Language


// var | let | const

// var - Globle Scope
// Re-assign
// kahi bhi access kar sakte hai

// let - Local Scope
// Re-assign
// Sirf khud k block k andar access kar sakte hai

// const - Local Scope
// Re-assign nahi kar sakte
// Sirf khud k block k andar hi access kar sakte hai




var age = 22;
console.log(age);

age = 'data';
console.log(age);


// vat -> Global Scope
if(true) {
    var myName = 'Test';
    console.log(myName);
}
console.log(myName);


// Let -> local Scope
if(true) {
    let anotherVar = 'let var';
    console.log(anotherVar);
}
// console.log(anotherVar);


// Const -> local Scope
const itemAge = 65;
// itemAge = 222;
console.log(itemAge);