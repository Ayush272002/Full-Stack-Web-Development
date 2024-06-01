// -------------------------------
// A function is a block of code that performs a specific task.
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.
// DRY - Don't Repeat Yourself
// function name(parameterIfAny) {...}

// -------------------------------
// declaring a function named greet()
function greet() {
  console.log("Hello there");
}

greet(); // calling function

// -------------------------------
function sayHello(username) {
  console.log(`Hello ${username}`);
}

sayHello("Ayush"); // calling function
// -------------------------------
// The return statement can be used to return the value to a function call.
function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
  // console.log("Hello World"); NOTHING
}

const result = add(10, 20);
console.log(result);
// -------------------------------

// 1. Create function name (myFunction)
// 2. This function will take 2 parameters
// 3. Any number we pass as argument it will multiply that number.
// 4. As argument pass your favorite numbers.
// 5. log the value.

function mul(a, b)
{
    return a * b;
}

console.log(mul(3, 4));