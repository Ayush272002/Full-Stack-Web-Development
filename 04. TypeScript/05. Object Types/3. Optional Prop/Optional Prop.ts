type User = {
    name : string,
    age? : number,
    location : string
}
const user : User = {
    name : "Ayush",
    location : "UK"
}

const user2 : User = {
    name : "Tom",
    age: 60,
    location : "UK"
}

console.log(user);
console.log(user2);