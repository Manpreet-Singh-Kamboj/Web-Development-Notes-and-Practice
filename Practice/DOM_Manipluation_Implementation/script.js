const colorBoxes = document.querySelectorAll(".color-box");
const colorCodeBoxes = document.querySelectorAll(".color-code");
const generateButton = document.querySelector(".btn");

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return { r, g, b };
};

generateButton.addEventListener("click", function () {
  let opacity = 1;
  const { r, g, b } = generateRandomColor();
  for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].style.backgroundColor = `rgb(${r}, ${g}, ${b},${opacity})`;
    colorCodeBoxes[i].textContent = `RGB(${r}, ${g}, ${b},${opacity})`;
    opacity = (opacity - 0.2).toFixed(1);
  }
});
