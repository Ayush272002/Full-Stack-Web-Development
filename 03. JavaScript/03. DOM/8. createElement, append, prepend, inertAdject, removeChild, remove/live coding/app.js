// ------------------------------------
// createElement()
const h1 = document.createElement("h1");
h1.textContent = "Hello World"
h1.classList.add("greetings");
console.log(h1);

// appendChild()
const body = document.body;
body.appendChild(h1);

// append()
const ul = document.querySelector("ul");
const newLi = document.createElement("li");
newLi.innerText = "Im new li tag";
ul.appendChild(newLi);

// prepend()
// insertBefore()
const firstLi = document.querySelector("li");
ul.insertBefore(newLi, firstLi);

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------
