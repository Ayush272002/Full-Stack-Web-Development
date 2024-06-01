// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
secondBtn.onclick = function() {
    console.log("Ayush");
}

// ----------- GREAT WAY-----------
const best = document.querySelector(".best");

// best.addEventListener("click", function () {
//     console.log("hello world");
// });

best.addEventListener("click", () => {
    console.log("hello bro");
});

// ----------- Event (e) Object -----------
const para = document.querySelector(".para");
para.addEventListener("click", (event) => {
    console.log(event);
})