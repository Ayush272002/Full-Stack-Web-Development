// Define a union type
type myType = string | number;

function exampleFunction(value:myType) : void {
    if(typeof value === "string") console.log(value.toUpperCase());
    else console.log(value.toFixed(2));
}

// Example usage
exampleFunction("hello"); // Outputs: HELLO
exampleFunction(42); // Outputs: 42.00