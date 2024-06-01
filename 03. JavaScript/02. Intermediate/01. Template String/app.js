// Template strings, also known as template literals, are a feature in JavaScript that allows you to create strings with embedded expressions. 
//They are denoted by backticks `` instead of single or double quotes. Template strings provide a more flexible and concise way to construct strings, 
//especially when they involve variables or expressions.

let firstName = "Ayush";
let lastName = "Acharjya";

function intro() {
  return "Hello my name is HuXn WebDev & i'm 19 years old";
}

console.log(
  `Hello my name is ${firstName} ${lastName} & i'm ${19 + 1000} years old.`
);

// 1. Store this in template string ~
// The quick
// brown fox
// jumps over
// the lazy dog

// 2. Create two variables (firstName, lastName)
// 3. Use that variables in template string.

let text = `The quick
brown fox
jumps over
the lazy dog`;

// ----------------
firstName = "John";
lastName = "Doe";

let text2 = `Welcome ${firstName}, ${lastName}!`;
// ----------------