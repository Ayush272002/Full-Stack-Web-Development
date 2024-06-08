//original interface
interface Cars{
    brand : string;
    start() : void;
}

//declaration merging (interface extension)
interface Cars{
    model : string;
    stop() : void;
}

// Usage of the extended interface

const mCar : Cars = {
    brand : "BMW",
    model : "X3",
    start(){
        console.log("Start");
    },

    stop(){
        console.log("Stop");
    }
}

console.log(mCar.start);