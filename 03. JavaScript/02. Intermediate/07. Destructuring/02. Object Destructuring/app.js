// In object destructuring order doesn't matter but the name does matter

// --------------------------
// Extracting a property
const student = { name: "Ayush", position: "First", rollno: "27" };
const { name, position, rollno } = student;
console.log(name); // HuXn
console.log(position); // First
console.log(rollno); // 27
// --------------------------

const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
  country: "USA",
};

// Your task is to use object destructuring to extract the name, age, and country properties from the person object.
// After extracting the properties, log each variable's value to the console.

const { fname, age, country } = person;
console.log(fname);
console.log(age);
console.log(country);
