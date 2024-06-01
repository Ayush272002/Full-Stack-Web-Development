// The ternary operator in JavaScript is a concise way of writing conditional expressions. It is the only JavaScript operator that takes three operands:
//a condition followed by a question mark (?), an expression to execute if the condition is true, followed by a colon (:), and an expression to execute
//if the condition is false.

// condition ? exprIfTrue : exprIfFalse;

// ------------------------------------
let password = 2;

function passwordChecker(ps) {
  // if (ps === 8) {
  //     return "Strong Password"
  // } else {
  //     return "Password should be 8 characters"
  // }

  return ps === 8 ? "Strong Password" : "Password should be 8 characters";
}

console.log(passwordChecker(password));
// -------------------------------

// -------------------------------
let age = 25;

// Using the ternary operator to determine if a person is an adult or not
const isAdult = age >= 18 ? "Adult" : "Not an Adult";

console.log(isAdult); // Output: "Adult"
// -------------------------------

// -------------------------------------
// REFACTOR THIS CODE & USE TERNARY OPERATOR
// check the age to determine the eligibility to vote
// let age = 15;
// let result;

// if (age >= 18) {
//       result = "You are eligible to vote.";
// } else {
//       result = "You are not eligible to vote yet.";
// }

// console.log(result);
// -------------------------------------

// -------------------------------------
// ternary operator to check the eligibility to vote
age = 15;
let result =
  age >= 18 ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);
// -------------------------------------

// -------------------------------------
// Create a program which checks if number is positive, negative or zero
let a = 3;
let res = a >= 0 ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${res}.`);
// -------------------------------------
