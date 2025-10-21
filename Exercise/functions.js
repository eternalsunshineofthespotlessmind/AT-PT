"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Functions
function displayPersonalData(name, age) {
    return `${name} is ${age} years old.`;
}
console.log(displayPersonalData("Joro", 32));
const personalData = displayPersonalData("Pete", 45);
console.log(personalData);
function greetingVoid() {
    console.log('This function is type void');
}
;
function print(message) {
    console.log(message);
}
print('hello');
function divideNums(numOne, numTwo) {
    return numOne / numTwo;
}
divideNums(10, 5);
divideNums(150, 5);
divideNums(1000, 5);
console.log(divideNums(10, 5));
// arrow function
const sumNums = (a, b) => a + b;
sumNums(3, 2);
// optional parameters
function greeting(name, age) {
    if (age) {
        return `${name} is ${age} years old`;
    }
    return `Hi i am  ${name}`;
}
console.log(greeting("Todor"));
console.log(greeting("Trifon", 20));
// default parameters
function substractNums(numOne = 10, numTwo = 5) {
    console.log(numOne - numTwo);
}
substractNums(50);
substractNums(50, 30);
//# sourceMappingURL=functions.js.map