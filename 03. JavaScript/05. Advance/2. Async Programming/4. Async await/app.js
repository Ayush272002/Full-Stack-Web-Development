// function fetchDataFromServer(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("User data retrieved from the server.")
//         }, 4000)
//     });
// }

// async function getUserData(){
//     try{
//         const data = await fetchDataFromServer();
//         console.log(data);
//         console.log("Remaining task can be executed here");
//     }catch (error){
//         console.log(error);
//     }
// }

// getUserData();

// -------------------------
// Refactoring our previous example to use (Async/Await)
console.log("Start");
function callbackHell(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = `Inside (callback hell) function`;
            console.log(data);
            resolve(data);
        }, 4000)
    })
}

function firstFunc(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processedData = `${data} - Processed First`
            console.log("Inside (firstFunc) function");
            resolve(processedData);
        }, 2000)
    })
}

function secondFunc(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const processedData = `${data} - Processed second`
            console.log("Inside (secondFunc) function");
            resolve(processedData);
        }, 1500)
    })
}

async function processDataWithAsyncAwait(){
    try{
        const data = await callbackHell()
        const processedData1 = await firstFunc(data);
        const processedData2 = await secondFunc(processedData1);
        console.log(`Final result of all function with async and await is ${processedData2}`);
    }catch(error){
        console.log(error);
    }
}

processDataWithAsyncAwait();
console.log("End");