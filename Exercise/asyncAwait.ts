// basic async operaton
console.log('Start');

setTimeout(() => {
  console.log('Async operation');
}, 4);

console.log('End');

function setTimeouts() {
  setTimeout(() => {
    console.log('3 seconds delay');
  }, 3000);
  setTimeout(() => {
    console.log('1 seconds delay');
  }, 1000);
  setTimeout(() => {
    console.log('2 seconds delay');
  }, 2000);
}
setTimeouts();

// async await syntax
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function demo() {
  await delay(2000);
  console.log('2 seconds delay II');
  await delay(3000);
  console.log('3 seconds delay III');
}
demo();

// get product data

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: Rating;
  category: string;
}

async function getData(): Promise<void> {
  try {
    const response = await fetch('https://fakestoreapi.com/procduts/1');
    const data: Product = await response.json();
    console.log(data);
  } catch (error: unknown) {
    console.error(error);
  }
  getData();

  //console.log(`Title: ${data.title}`)
  //console.log(`Price: ${data.price}`)
  //console.log(`Category: ${data.category}`)
}

getData();

// try catch finally
try {
  const jsonData = JSON.parse('{"valid: true}');
  console.log(jsonData);
} catch (err) {
  console.error('Invalid JSON format!', err);
} finally {
  console.log('JSON parser ready');
}

let loadingSpinner = false;
function setloadingSpinner() {
  loadingSpinner = true;
  try {
    //  fetch();
  } catch (err) {
    return err;
  } finally {
    loadingSpinner = false;
  }
}

// try/ catch/ final excercise

// try/catch/finally exercise

function divideNumbers(numOne: number, numTwo: number) {
  try {
    if (numTwo === 0) {
      throw new Error('Cannot divide by zero!');
    } else {
      const result: number = numOne / numTwo;
      console.log(`Result ${result}`);
    }
  } catch (err: unknown) {
    console.error(`Error: ${err}`);
  } finally {
    console.log('Operation finished');
  }
}
divideNumbers(20, 0);

export {};
