// arrays declaration

let arrayNums: number[] = [1, 2, 3, 4];
let arrayString: string[] = ['Pesho', 'Gosho', 'Tosho', 'Ivan'];
let arrayCombined: (string | number)[] = [1, 'Pesho', 'Ivan', 4];

// access element by index

arrayString[0];
arrayString[1];
arrayCombined[2];

// access array length
arrayNums.length;

// method map
let multiplyNums = arrayNums.map((num: number) => num * 2);
console.log(multiplyNums);
let mapNames = arrayString.map((currName: string) => `Hello ${currName}`);
console.log(mapNames);






let checkTypeOf = arrayCombined.map((element: number | string) => {
  if (typeof element === 'number') {
    return element + 5;
  } else {
    return `Welcome ${element}`
  }
});
console.log(checkTypeOf);
