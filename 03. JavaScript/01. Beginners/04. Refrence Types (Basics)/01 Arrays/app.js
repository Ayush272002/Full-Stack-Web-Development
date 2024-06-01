 // -----------------------------------
// An array is an object that can store multiple values at once. For example,
// const words = ["hello", "world", "welcome"];
// ['string', 123, true, []]
// -----------------------------------

// -----------------------------------
// empty array
const myList = [];

// array of numbers
const numberArray = [2, 4, 6, 8];

// array of strings
const stringArray = ["eat", "work", "sleep"];

// array with mixed data types
// const newData = ["work", "exercise", 1, true];
// -----------------------------------
const newData = [
  { task1: "exercise" },
  [1, 2, 3],
  function hello() {
    console.log("hello");
  },
];

// -----------------------------------
// ACCESSING ITEMS
const myArray = ["h", "e", "l", "l", "o"];

// first element
console.log(myArray[0]); // "h"

// second element
console.log(myArray[1]); // "e"

// 1. Create array name (favSingers) Store 3 favorite singers.
// 2. log the first singer in that array.
// 3. Create array name (favNumbers) & store 4 fav Numbers.
// 4. Create array name (mixedArr) store ["string", ["otherarray"], 123, true]
// 5. Now Access each item in that array by using [] notation.

const favSingers = ["21 Savage", "Post Malone", "NF"];
console.log(favSingers[0]);

const favNumbers = [321, 123, 1, 23];
console.log(favNumbers);

let mixedArr = ["string", ["otherarray"], 123, true];
console.log(mixedArr);

// ACCESSING ITEMS FROM ARRAY
console.log(favSingers[0]);
console.log(favSingers[1]);
console.log(favSingers[2]);
console.log(mixedArr[3]);