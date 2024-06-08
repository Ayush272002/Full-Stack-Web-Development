interface Person {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

function greet(person: Person) {
  console.log(`Hello, ${person.firstName} ${person.lastName}!`);
  person.sayHello();
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  sayHello() {
    console.log("Hi there!");
  },
};

const ayush: Person = {
  firstName: "Ayush",
  lastName: "Acharjya",
  age: 18,
  sayHello() {
    console.log("What's good");
  },
};

greet(john);
greet(ayush);

// ----------------------------------
// Interface #3 (Interface with method properties)
interface Song {
  songName: string;
  singerName: string;
  printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
  songName: "abc",
  singerName: "xyz",
  printSongInfo: (songName, singerName) => {
    return `Song : ${songName}, Singer : ${singerName}`;
  },
};

console.log(song1.printSongInfo("Shape of You", "Ed Sheeran"));