let myTuple: [number, string];
myTuple = [10, "abc"];
// myTuple = ["Hello World", 2]; // Not Valid ⚠️

console.log(myTuple);
console.log(myTuple[0]);
console.log(myTuple[1]);
// ----------------------

// ----------------------
const products: (number | string)[] = ["Item 1", 23];
console.log(products);
// ----------------------

// ----------------------
const games: [string, string, string] = ["Game 1", "Game 2", "Game 3"];
console.log(games);
// ----------------------