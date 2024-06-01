// -------------------------------
// When we provide function as an (argument) to other function/argument that function is known as callback function.

// callback(function() {...})
// -------------------------------

function showCallFunc(funct)
{
    const value = 10;
    funct(10);
}

function fn(val)
{
    console.log(val ** val);
}

showCallFunc(fn);

console.log("=============================================")

function greet(name, cb)
{
    console.log(`Hello ${name}`);
    cb();
}

function callMe()
{
    console.log("I am callback function");
}

greet("Ayush", callMe);