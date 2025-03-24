/*
    Pillars of DOM: 
    1. Selection of Elements
    2. Changing HTML
    3. Changing CSS
    4. Event Listeners
*/

let body = document.querySelector("body");
body.style.backgroundColor = "black";

let h1 = document.querySelector("h1");

h1.innerHTML = "Hello, World!";

h1.style.width = "100%";
h1.style.color = "red";
h1.style.backgroundColor = "blue";

h1.addEventListener("click", function () {
  h1.style.backgroundColor = "green";
  h1.style.color = "blue";
});

let box = document.getElementById("box");
box.style.width = "200px";
box.style.height = "200px";
box.style.backgroundColor = "red";
// Only Reads it as a Text Content
box.textContent = "Text Content";
// Render it as an HTML element
box.innerHTML = "<h1>Changed</h1>";
box.style.color = "white";
box.style.textAlign = "center";
box.style.justifyContent = "center";
box.style.alignItems = "center";

let changeButton = document.querySelector("#btn");

function changeBox() {
  box.style.background = "green";
  box.innerHTML = "<h1>Changed BG to Green</h1>";
}

changeButton.addEventListener("click", changeBox);
