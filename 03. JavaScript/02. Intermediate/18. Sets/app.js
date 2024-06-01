// -------------------------------------------------
// Set is a built-in data structure introduced in (ES6) that represents a collection of unique values. Unlike arrays, Set allows you to store only unique values, which means duplicate values are automatically removed. Each value can occur only once within a Set.

// Set objects are useful when you need to store a list of unique elements and quickly check for the existence of a specific value.

// const mySet = new Set(); // empty set
// const initialValues = [1, 2, 3];
// const mySet = new Set(initialValues); // list added

// const mySet = new Set();

// mySet.add("apple");
// mySet.add("banana");
// mySet.add("orange");
// mySet.add("apple"); // Duplicate value; will be ignored

// console.log(mySet); // Set(3) { 'apple', 'banana', 'orange' }

// console.log(mySet.has("banana")); // true
// console.log(mySet.has("grape")); // false

// mySet.delete("orange");
// console.log(mySet); // Set(2) { 'apple', 'banana' }

// mySet.clear();
// console.log(mySet); // Set(0) {}
// -------------------------------------------------

const set = new Set();

set.add();
set.add("string");
set.add({ name: "ayush" });
set.add(10);

console.log(set.size);
console.log(set.keys());
console.log(set.has({ name: "ayush" }));

set.delete(10);
console.log(set);

// Iterating over sets.
for (let item of set) {
  console.log(item);
}

// 1. Create a Set name (letters)
// 2. Add ("a", "b", "c") as properties
// 3. Add ("a", "b", "c") as values
// 4. Iterate over Set & log the values.

// -------------------------------
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

// Create Variables
const a = "a";
const b = "b";
const c = "c";

for (let value of letters) {
  console.log(value);
}

// --------- TOTALLY OPTIONAL & ALSO REQUIRES THE KNOWLEDGE OF REGEX
// Write a function called (getUniqueLetters) that takes a string as input and returns a Set containing all the unique letters (case-insensitive) present in the string.

// output should look something like this 👇
// const text = "Hello World";

// const uniqueLettersSet = getUniqueLetters(text);
// console.log(uniqueLettersSet);
// OUTPUT 👉 Set(7) { 'h', 'e', 'l', 'o', ' ', 'w', 'r' }

// ************* SOLUTION

function getUniqueLetters(str) {
  const uniqueLetters = new Set();
  const lowercaseStr = str.toLowerCase();

  for (const char of lowercaseStr) {
    if (/[a-z]/i.test(char)) {
      uniqueLetters.add(char);
    }
  }

  return uniqueLetters;
}

const text = "Hello World";
const uniqueLettersSet = getUniqueLetters(text);
console.log(uniqueLettersSet);