// Functions
 function displayPersonalData(name: string, age: number){
    return `${name} is ${age} years old.`
 }
    console.log(displayPersonalData("Joro", 32));

    const personalData: string = displayPersonalData("Pete", 45);
    console.log(personalData)

    function greetingVoid(): void {
        console.log('This function is type void')
    };

    function print(message: string): void {
        console.log(message);
    }

    print('hello');

    function divideNums (numOne: number, numTwo: number): number {
        return numOne / numTwo;
    }

    divideNums(10, 5);
    divideNums(150, 5);
    divideNums(1000, 5);

    console.log(divideNums(10, 5));

    // arrow function
    const sumNums = (a: number, b: number) => a + b;
    sumNums(3,2);

    // optional parameters
    function greeting(name: string, age?: number){
        if (age) {
            return `${name} is ${age} years old`
        }
        return `Hi i am  ${name}`;
    }
    console.log(greeting("Todor"));
    console.log(greeting("Trifon", 20));

    // default parameters
    function substractNums (numOne: number = 10, numTwo: number = 5) {
        console.log(numOne - numTwo);
    }
    substractNums(50);
    substractNums(50,30);

    //Functions with parameter of union type

    function printId(id: string | number) {
        console.log(`Id - ${id} is type of ${typeof id}`)
    }

    printId("#10");
    printId(10);