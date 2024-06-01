// --- DESTRUCTURING ---
// Destructuring allows us to "unpack" values from data-structures (Arrays, objects)
// into separate distinct variables.

// --------------------------------
// Basic variable assignment
let foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red);
console.log(yellow);
console.log(green);
// --------------------------------

// --------------------------------
foo = ["one", "two"];

const [a, b, c, d] = foo;
console.log(a); //one
console.log(b); //two
console.log(c); //undefinded
console.log(d); //undefined
// --------------------------------

// --------------------------------
// DEFAULT VALUES
const [x, y, z = 4] = foo;
console.log(x);
console.log(y);
console.log(z);

// --------------------------------
// Swapping variables
let m = 1;
let n = 3;

[m, n] = [n, m];
console.log(m); // 3
console.log(n); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]
// --------------------------------

// --------------------------------
// Parsing an array returned from a function
function f() {
  return [1, 2];
}

let q, r;
[q, r] = f();
console.log(q); // 1
console.log(r); // 2
// --------------------------------

// --------------------------------
// Ignoring some returned values
function f() {
  return [1, 2, 3];
}

const [i, , j] = f();
console.log(i); // 1
console.log(j); // 3

const [g] = f();
console.log(g); // 1
// --------------------------------

// --------------------------------
// Assigning the rest of an array to a variable
const [l, ...e] = [1, 2, 3];
console.log(l); // 1
console.log(e); // [2, 3]
// --------------------------------
