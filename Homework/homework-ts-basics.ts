//1

let name: string = 'Petar Petrov';
let age: number = 20;
console.log(`Hello! I am ${name} and I am ${age} years old`);

//2

let number1: number = 17;
let number2: number = 14;

let addition = number1 + number2;
let substraction = number1 - number2;

console.log(`When we add ${number1} to ${number2} we get ${addition}`);
console.log(
  `When we substract ${number2} from ${number1} we get ${substraction}`
);

//3

let number3: number = addition;
if (number3 >= 10 && number3 <= 50) {
  console.log(`${number3} is withing the proper range`);
} else {
  console.log(
    'The number you chose is not within range - please choose another one'
  );
}
