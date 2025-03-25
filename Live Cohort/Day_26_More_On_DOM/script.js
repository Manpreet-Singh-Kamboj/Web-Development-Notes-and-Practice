const boxElement = document.querySelector("#box");
const btn = document.querySelector("#btn");
const currColorSpan = document.querySelector("#currColor");
function generateRandomColors() {
  const c1 = Math.floor(Math.random() * 256);
  const c2 = Math.floor(Math.random() * 256);
  const c3 = Math.floor(Math.random() * 256);
  const color = `rgb(${c1}, ${c2}, ${c3})`;
  boxElement.style.backgroundColor = color;
  currColorSpan.textContent = color;
}

btn.addEventListener("click", generateRandomColors);
