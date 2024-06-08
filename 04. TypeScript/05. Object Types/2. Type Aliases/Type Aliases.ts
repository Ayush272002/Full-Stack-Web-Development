type User = {
    name: string;
    age: number;
    location: string
}

const printUserInfo = (user: User) => {
    return `Name: ${user.name}, Age : ${user.age}, Location : ${user.location}`
}

const res = printUserInfo({name: "Ayush", age: 19, location: "UK"});
console.log(res);