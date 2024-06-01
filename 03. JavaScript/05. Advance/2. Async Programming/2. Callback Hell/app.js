function callbackHell(callback){
    setTimeout(() => {
        const data = "Inside (callbackHell) function";
        console.log(data);
        callback(data)
    }, 2000);
}

function firstFunc(data, callback)
{
    setTimeout(() => {

        const processdData = `${data} - Processed First`;
        console.log("Inside (firstFunc) Function");
        callback(processdData);
    }, 1000)
}

function secondFunc(data, callback){
    setTimeout(() => {

        const processdData = `${data} - Processed Second`;
        console.log("Inside (secondFunc) Function");
        callback(processdData);
    }, 1500)
}

//callback hell
callbackHell((data) => {
    firstFunc(data, (processdData1) => {
        secondFunc(processdData1, (processdData2) => {
            console.log(`Final Result of all functions: ${processdData2}`);
        })
    })
})
// -----------------------------------------------------

// ********* Example 2
// Callback is not always asynchronous

// This is the example of synchronous callback function
console.log("Start"); // first

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((r) => {
  console.log(r); // second
});

console.log("End"); // third
// -----------------------------------------------------