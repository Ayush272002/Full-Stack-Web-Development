//regular function
function addOne(num: number){
    return num+1;
}

const result = addOne(3);
console.log(result);

//arrow function annotation
const double = (x:number, y:number) => x*y;
const res = double(2, 4);
console.log(res); 