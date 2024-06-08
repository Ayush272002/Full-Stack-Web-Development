// ---------------------------
// Example 1

// Interface for a function
interface MathOperation{
    (x: number, y: number): number;
}
const add : MathOperation = (a, b) => a + b;
console.log(add(2, 2));
// ---------------------------

// ---------------------------
// Example 2

// Define an interface for a Car
interface Car{
    brand: string;
    model: string;
    year: number;
}

// Function that accepts an object adhering to the Car interface
function displayCarInfo(car : Car) : void{
    console.log(`Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`);
}

const myCar : Car = {
    brand : "Audi",
    model : "A8",
    year : 2024,
}

// Call the function with the object
displayCarInfo(myCar);
// ---------------------------