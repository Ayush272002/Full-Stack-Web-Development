type UserInfo = {
    first : string,
    last : string,
    age? : number;
}

type AccountDetails = { 
    email : string,
    readonly password : string;
}

type User = UserInfo & AccountDetails;

const ayush: User = {
    first : "Ayush",
    last : "Acharjya",
    //age: 90,
    email : "xyz@abc.com",
    password : "abc"
}

console.log(ayush);