// type variableName (annotations/types) = {property:value}

// -------------------------
// Define a person object
const person: { firstName: string; lastName: string; age: number } = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 30,
};

// Access and log properties
console.log(
  `Name : ${person.firstName} ${person.lastName}, Age : ${person.age}`
);
// -------------------------

// -------------------------
// Using objects as function return value
function printUser(): { name: string; age: number; location: string } {
  return {
    name: "Ayush",
    age: 80,
    location: "UK",
  };
}

const res = printUser();
console.log(res);

function printUserName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

printUserName({ firstName: "Ayush", lastName: "Acharjya" });
// -------------------------