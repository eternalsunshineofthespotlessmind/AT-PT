// Interface declaration
interface Car {
  type: string;
  model: string;
  color: string;
  horsePower: number;
}

// Object declaration
const car = {
  type: 'Mercedes',
  model: 'S class',
  color: 'black',
  horsePower: 550,
};

// Interface person object
interface Person {
  name: string;
  lastName: string;
  address: string;
  age: number;
  hobbies: string[];
  greeting: () => string;
}

console.log(car);

// Object with method and array value
const person = {
  name: 'Miro',
  lastName: 'Stoimenov',
  address: 'Sofia',
  age: 38,
  hobbies: ['badminton', 'cycling'],
  greeting: function () {
    return 'Hello! My name is Miro.';
  },
};
console.log(person);

// Properties access

console.log(person.name);
console.log(person.age);
console.log(person.hobbies);

person.name;
person.age;
person['address'];
// console.log(person.greeting());

person.greeting();
person['greeting']();

// Properties Redeclaration
person.age = 40;
console.log(person);

// Explicit Object type
const mouse: { name: string; favFood: string; age: number } = {
  name: 'Jerry',
  favFood: 'cheese',
  age: 2,
};

// Interfaces - optional parameters, read only and string literals

interface User {
  name: string;
  email: string;
  // string literals
  role: 'admin' | 'user' | 'superadmin' | 'superuser';
  //optional parameter
  job?: string;
  password?: string | number;
}
const user: User  = {
  name: 'Tom',
  email: 'tom@MediaList.com',
  role: 'admin',
  job: 'qa',
};
// optional parameter added later
user.password = 123453434;
console.log(user);

interface UserPermission extends User {
  permissions: string;
}

const thirdUser: UserPermission = {
  name: 'Tom2',
  email: 'tom2@mail.com',
  role: 'superuser',
  job: 'QAAAA',
  permissions: "denied",
};

// exercise sum total price

interface Product {
  name: string;
  price: number;
  getTotalPrice: (guantity: number) => number;
}

const phone: Product = {
 name: 'Nokia',
 price: 600,
 getTotalPrice: function (quantity: number){
  return quantity * this.price;
 }
}


console.log(phone)

function orderDetails (quantity: number, product: Product) {
  console.log(`Order for: ${product.name}`);
  console.log(`Product quantity: ${quantity}`);
  console.log(`Product unit price: $${product.price}`);
  console.log(`Total price: ${product.getTotalPrice(quantity)}$`)
  // console.log("quantity", quantity);
  // console.log("product", product);
}
orderDetails(5, phone)