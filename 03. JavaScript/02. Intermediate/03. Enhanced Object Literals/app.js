// Enhanced object literals, introduced in ECMAScript 6 (ES6), are a set of enhancements to the syntax for
//defining objects in JavaScript. These enhancements make it more convenient and concise to define object properties and methods

function user(name, age, work) {
  return {
    name: name,
    age: age,
    work: work,
    intro: () => {
      console.log(`My name is ${name} i'm ${age} years old, & i'm a ${work}`);
    },
  };
}

const huxn = user("Ayush", 19, "Programmer");
huxn.intro();

// -------------------------------
// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code
// var a = 1,
//   b = 2,
//   c = 3;
// obj = {
//   a: a,
//   b: b,
//   c: c,
// };

// obj.a = 1, obj.b = 2, obj.c = 3

// -------------------------------
// ES6 code
const a = 1,
  b = 2,
  c = 3;
obj = {
  a,
  b,
  c,
};

// obj.a = 1, obj.b = 2, obj.c = 3
// -------------------------------
// ES5 code
// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mult: function (a, b) {
//     return a * b;
//   },
// };

// console.log(lib.sum(2, 3)); // 5
// console.log(lib.mult(2, 3)); // 6
// -------------------------------

// -------------------------------
// ES6 code
const lib = {
  sum(a, b) {
    return a + b;
  },
  mult(a, b) {
    return a * b;
  },
};

console.log(lib.sum(2, 3)); // 5
console.log(lib.mult(2, 3)); // 6

// -------------------------------
// function getPersionES5(name, age, height) {
//   return {
//     name: name,
//     age: age,
//     height: height,
//   };
// }

// getPersionES5("Zachary", 23, 195);
// Expected output: { name: 'Zachary', age: 23, height: 195 }
// -------------------------------
function getPersionES6(name, age, height) {
  return {
    name,
    age,
    height,
  };
}

getPersionES6("Zachary", 23, 195);
// Expected output: { name: 'Zachary', age: 23, height: 195 }
