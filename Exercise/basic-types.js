"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let vs const
let num = 5;
num = 10;
num = 15;
const welcomeMssg = 'Welcome!';
// Cannot assign to 'welcomeMssg' because it is a constant.ts(2588)
// welcomeMssg ="Welcome, Peter!"
// string
let message = 'Hello, Peter!';
let messageLength = message.length;
console.log(messageLength);
// string interpolation
let welcomeMessageDetails = `Text message length is ${messageLength}`;
console.log(welcomeMessageDetails);
// number and number operations
let numOne = 0;
let numTwo = 5;
let add = numOne + numTwo;
let substract = numOne - numTwo;
let multiply = numOne * numTwo;
let divide = numOne / numTwo;
// boolean (true/false)
let areEqual = numOne === numTwo;
let isGreater = numOne > numTwo;
let isGreaterOrEqual = numOne >= numTwo;
console.log('areEqual', areEqual);
console.log('isGreater', isGreater);
console.log('isgreaterOrEqual', isGreaterOrEqual);
//logical operators
let areEqualTo = numOne === 0 && numTwo === 4;
let isAnyNumEqualTo = numOne === 10 || numTwo === 12;
console.log('areEqualTo', areEqualTo);
console.log('IsAnyNumEqualTo', isAnyNumEqualTo);
// Conditions
//ternary operator
5 === 5 ? 'true result' : 'false result';
let PositiveNumComparison = numOne > 0
    ? `True, the number ${numOne} is positive`
    : `False, the number ${numOne} is NOT positive`;
console.log(PositiveNumComparison);
// if/else statement 
const numThree = 100;
if (numThree <= 3) {
    console.log("numThree is less or equal to 10");
}
else if (numThree > 50) {
    console.log("The numThree is greater than 50");
}
else {
    console.log("numThree is not greater than 3");
}
//# sourceMappingURL=basic-types.js.map