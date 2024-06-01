// The "for...in" loop in JavaScript is used to iterate over the enumerable properties of an object. It is a way to loop through the keys (property names) of an object.

// for (let key in object) {...}

// Here, variable is a variable that will represent each property name (key) during each iteration, and object is the object being looped through.

// --------------------------
let person = {
  name: "Ayush",
  age: 17,
  gender: "Male",
};

for (let key in person) {
  console.log(key, person[key]);
}
// --------------------------

// --------------------------
let list = ["one", "two", "three", "four"];

for (let index in list) {
  console.log(`${index}: ${list[index]}`);
}
// --------------------------

// Iterate over object & log the property and the value of that object using for in loop.
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Exercise 2
// You are given an object representing a student's test scores. Each property of the object represents the subject name (e.g., "Math", "Science") and the value represents the score. Your task is to use the "for...in" loop to calculate and print the average score of the student.

// const testScores = {
//   Math: 90,
//   Science: 85,
//   History: 78,
//   English: 92,
//   Geography: 88,
// };

// Write a function called calculateAverageScore that takes an object representing test scores as an argument and returns the average score of the student.

// const testScores = {
//   Math: 90,
//   Science: 85,
//   History: 78,
//   English: 92,
//   Geography: 88,
// };

// const averageScore = calculateAverageScore(testScores);
// console.log(averageScore); // Output: 86.6

// ****************** SOLUTION
function calculateAverageScore(scores) {
  let totalScore = 0;
  let numSubjects = 0;

  for (let subject in scores) {
    totalScore += scores[subject];
    numSubjects++;
  }

  return totalScore / numSubjects;
}

// Testing the function with the example test scores object
const testScores = {
  Math: 90,
  Science: 85,
  History: 78,
  English: 92,
  Geography: 88,
};

const averageScore = calculateAverageScore(testScores);
console.log(averageScore); // Output: 86.6
