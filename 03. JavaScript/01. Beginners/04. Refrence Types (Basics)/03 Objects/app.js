// ------------------------
// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.

// {key: value}
// ------------------------

// ------------------------
// Creating Object

const person = {
    firstName : "Ayush",
    lastName : "Acharjya", 
    age : 19,
    location : ["Planet", "Mars"],
    isProgrammer : true,
};

console.log(person);
console.log(typeof person);

//Accessing Items
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location);
console.log(person.location[0]); 
console.log(person.location[1]);
console.log(person.isProgrammer);

console.log(person["firstName"]);

// 1. Create object name (car)
// 2. add (type, model, color) as properties
// 3. check the type of object
// 4. Update the type property to "Toyota"
// 5. Add new property wheels
// 6. log car to the console.

const car = {
    type : "Automatic",
    model : "SUV",
    color : "Blue",
};

console.log(typeof car);
car.type = "Toyota";
car.wheels = 4;
console.log(car);