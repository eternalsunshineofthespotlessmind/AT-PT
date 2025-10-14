// let vs const
let num: number = 5;
num = 10;
num = 15;

const welcomeMssg: string = 'Welcome!';
// Cannot assign to 'welcomeMssg' because it is a constant.ts(2588)
// welcomeMssg ="Welcome, Peter!"

// string
let message: string = 'Hello, Peter!';
let messageLength: number = message.length;
console.log(messageLength);

// string interpolation
let welcomeMessageDetails: string = `Text message length is ${messageLength}`;
console.log(welcomeMessageDetails);

// number and number operations

let numOne: number = 0;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let substract: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let divide: number = numOne / numTwo;

// boolean (true/false)

let areEqual: boolean = numOne === numTwo;
let isGreater: boolean = numOne > numTwo;
let isGreaterOrEqual: boolean = numOne >= numTwo;

console.log('areEqual', areEqual);
console.log('isGreater', isGreater);
console.log('isgreaterOrEqual', isGreaterOrEqual);

//logical operators

let areEqualTo: boolean = numOne === 0 && numTwo === 4;
let isAnyNumEqualTo: boolean = numOne === 10 || numTwo === 12;
console.log('areEqualTo', areEqualTo);
console.log('IsAnyNumEqualTo', isAnyNumEqualTo);

// Conditions

//ternary operator
5 === 5 ? 'true result' : 'false result';
let PositiveNumComparison: string =
  numOne > 0
    ? `True, the number ${numOne} is positive`
    : `False, the number ${numOne} is NOT positive`;
console.log(PositiveNumComparison);

// if/else statement 

const numThree: number = 100;
if (numThree <=  3) {
    console.log("numThree is less or equal to 10")
} else if (numThree >50) {
    console.log("The numThree is greater than 50")
}
else {
    console.log("numThree is not greater than 3")
}