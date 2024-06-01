// if (condition) {...}
// else if (condition_2) {...}
// else {...}
// ------------------------

let a = 10,
  b = 20;
if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}

// ------------------------

if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
// ------------------------

// ------------------------
let password;

if (password === 8) {
  console.log("Welcome");
} else if (password <= 8) {
  console.log("Password is too short");
} else if (password >= 8) {
  console.log("Too long password");
  console.log("Password should be 8 characters");
} else {
  console.log("Please provide a password");
}
// -----------------------------

// 1. Create variable name (password) store nothing.
// 2. If password is equal to 8 print "Welcome"
// 3. If password is less then or equal to 8 print "Password is too short"
// 4. If password is greater then or equal to 8 print "Too Long Password" & "Password should be 8 characters"
// 5. If all fails print "Please provide a password."

let password;

if (password === 8) {
  console.log("Welcome");
} else if (password <= 8) {
  console.log("Password is too short");
} else if (password >= 8) {
  console.log("Too long password");
  console.log("Password should be 8 characters");
} else {
  console.log("Please provide a password");
}