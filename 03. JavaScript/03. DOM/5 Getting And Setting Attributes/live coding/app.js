// href
const a = document.querySelector("a");
console.log(a.href);
//console.log(a.href = "www.youtube.com");

// value
const input = document.querySelector("input");
console.log(input.value);

// type
console.log(input.type);

// getAttribute(attrName)
console.log(input.getAttribute("type"));

// setAttribute(attrName, value)
input.setAttribute("placeholder", "Password");
input.setAttribute("type", "password");