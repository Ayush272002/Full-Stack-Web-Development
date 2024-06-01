// ************ DOM SELECTORS ************
// 1. getElementsByTagName 
console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);

// 2. getElementById
console.log(document.getElementById("main"));

// 3. getElementsByClassName
console.log(document.getElementsByClassName("cls"));

// 4. querySelector if there are many classes with the same name it would give the first one
console.log(document.querySelector("h1")); //tag name
console.log(document.querySelector(".cls")); //class name
console.log(document.querySelector("#id-1")); //id 

// 5. querySelectorAll
console.log("=====")
console.log(document.querySelectorAll(".cls"));
console.log(document.querySelectorAll("li"));

// ---------------------------------------
// Storing data in variables
console.log("=====")
const h1 = document.querySelector("h1");
console.log(h1);