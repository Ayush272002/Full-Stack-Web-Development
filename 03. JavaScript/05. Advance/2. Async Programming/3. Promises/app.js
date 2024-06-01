function checkNumbers(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 == 0) {
      resolve(`${number} is an even number`);
    } else {
      reject(`${number} is an odd number`);
    }
  });
}

const numberToCheck = 6; //odd
checkNumbers(numberToCheck)
  .then((message) => {
    console.log(`Success: ${message}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });

//another example
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = "Inside (callback hell) function";
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - Processed first`;
      console.log("Inside (firstFunc)");
      resolve(processedData);
    }, 2000);
  });
}

function secondFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - Processed second`;
      console.log("Inside (secondFunc)");
      resolve(processedData);
    }, 1500);
  });
}

fetchData()
  .then((data) => firstFunc(data))
  .then((processedData1) => secondFunc(processedData1))
  .then((processedData2) => {
    console.log(
      `Final Result of all functions with Promises: ${processedData2}`
    );
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });