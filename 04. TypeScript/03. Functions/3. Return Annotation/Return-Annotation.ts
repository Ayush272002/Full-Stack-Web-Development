//regular function
function double(x: number): number{
    return 2*x;
}

console.log(double(2));

//using arrow function
const Double = (x: number): number => x*2;
console.log(Double(2));