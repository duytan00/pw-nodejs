let myName = "Teo";
console.log(myName);

//[v] Re-assign | [X] Re-declare
myName = 18;
// let myName = 18;

console.log(myName);

// Constant
const PI_NUMBER = 3.14;
// [x]  NOT-allowed to be reassigned, ex: PI_NUMBER = 2;

//1.7976931348623157e+308 -> 1.7976931348623157 * 10^38

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// Check the type of the value
console.log(typeof (1.7976931348623157e+308 + 1));
console.log(Infinity > 1.7976931348623157e+308);

//Boolean
let amIRight = false;
amIRight = true;
console.log(typeof amIRight);