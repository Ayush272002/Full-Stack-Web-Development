// Symbol is a unique and immutable primitive data type introduced in ECMAScript 6 (ES6). A symbol is often used as an identifier for object properties
//to avoid potential naming conflicts.

// Unlike strings or numbers, symbols are guaranteed to be unique. When you create a symbol, it is unique and cannot be recreated or changed.
//This uniqueness ensures that symbols will not collide with other property names, even if they have the same string representation.

// -----------------------
// const mySymbol = Symbol();
// const mySymbol = Symbol("My custom symbol");
// -----------------------

// const mySymbol1 = Symbol();
// const mySymbol2 = Symbol("My custom symbol");

// const obj = {};

// obj[mySymbol1] = "Value 1";
// obj[mySymbol2] = "Value 2";

// console.log(obj); // Output: { [Symbol()] : "Value 1", [Symbol(My custom symbol)] : "Value 2" }
// console.log(obj[mySymbol1]); // Output: "Value 1"
// console.log(obj[mySymbol2]); // Output: "Value 2"

const symbol1 = Symbol("name");
const symbol2 = Symbol("name");

console.log(symbol1);
console.log(typeof symbol1);
console.log(symbol1 === symbol2);

const ayush = {};
ayush.age = 17;
ayush["gender"] = "male";
ayush["female"] = "female";
ayush[symbol1] = "Alex";
ayush[symbol2] = "John";
console.log(ayush);

// 1. Create a symbol provide a value of "foo"
// 2. Check the type of that symbol.
// 3. Create empty object
// 4. Store symbol as the property to that object.
// 5. Iterate over Symbol.

let sym = Symbol("foo");
typeof sym; // "symbol"
let symObj = Object(sym);
typeof symObj; // "object"

let obj = {};

obj[Symbol("a")] = "a";

for (let i in obj) {
  console.log(i); // logs "c" and "d"
}