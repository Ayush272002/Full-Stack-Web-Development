// --------------------------
// Assigning new variable names
const num = { x: 100, y: 200 };
const { x: new1, y: new2 } = num;

console.log(new1);
console.log(new2);
// --------------------------

// --------------------------
// Assignment without declaration
let name, division;
({ name, division } = { name: "Ayush", division: "First" });
console.log(name); // Ayush
console.log(division); // First
// --------------------------

// --------------------------
// Object destructuring and rest operator
let { a, b, ...args } = { a: 100, b: 200, c: 300, d: 400, e: 500 };
console.log(a);
console.log(b);
console.log(args);
// --------------------------

const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
  country: "USA",
};

// Your task is to use object destructuring to extract the name, age, and country properties from the person object and assign them to separate variables named personName, personAge, and personCountry.

// After extracting the properties, log each variable's value to the console.

const { name: personName, age: personAge, country: personCountry } = person;
console.log(personName);
console.log(personAge);
console.log(personCountry);
