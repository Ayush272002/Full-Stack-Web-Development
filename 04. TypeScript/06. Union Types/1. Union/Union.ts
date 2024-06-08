let password : string | number = 20;

type UserInfo = {
    first : string,
    last : string,
    age : number
}

type AccountDetails = {
    email : string;
    password : string;
}

let user : UserInfo | AccountDetails = {
    first: "Jhon",
    last : "Doe",
    age : 40
}

let user2 : UserInfo | AccountDetails = {
    email: "Jhon@xyz.com",
    password : "Doe",
}

console.log(user);
console.log(user2);

const items: (number | string)[] = [1, 3, "hello"];
console.log(items);