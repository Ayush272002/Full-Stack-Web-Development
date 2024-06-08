interface MovieDetails {
    readonly name : string;
    ratings : number;
    printMovies(name: string, price: number, ratings: number) : string | number;
}

interface MovieGenre extends MovieDetails {
    genre: string;
}

const movie1 : MovieGenre = {
    name : "Star Wars",
    genre : "Action",
    ratings : 8.3,
    printMovies(name: string, price: number, ratings: number) {
        return `Name: ${name}, Price: ${price}, Ratings: ${ratings}`;
    }

    // printMovies : (name: string, price: number, ratings: number) => {
    //     return `Name: ${name}, Price: ${price}, Ratings: ${ratings}`;
    // }
}

const res = movie1.printMovies("Jhon Wick", 100, 8.89);
console.log(res);