////////////////////////////////////////////////
// When we call the forEach helper we pass in anonymous callback function,
// This function gets called one time for every element in the array
// Whatever is inside the function that logic happens
let colors = ["teal", "blue", "red", "green"];

// for (var i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

colors.forEach((color) => console.log(color));

/////////////////////////////////////////////////
const words = ["hello", "bird", "table", "football", "pipe", "code"];

const capWords = words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
});

console.log(words);

// 1. Create an array of numbers.
let numbers = [1, 2, 3, 4, 5];

// 2. Create a variable to hold the sum.
let sum = 0;

// 3. Create the adder function which takes the parameter of number & add that with sum variable.
function adder(number) {
  sum += number;
}

// 4. Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach
numbers.forEach(adder);

// 5. print the sum variable.
console.log(sum);