const h1 = document.querySelector("h1");

h1.innerHTML = "Hey There!!";

const img = document.querySelector("#img");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  btn.textContent = "Fetching Image...";
  setTimeout(() => {
    img.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1498804103079-a6351b050096"
    );
    btn.textContent = "Successfully Fetched ";
    const div = document.createElement("div");
    div.style.marginTop = "4rem";
    div.style.backgroundColor = "#ab1419";
    div.style.width = "250px";
    div.style.height = "250px";
    div.style.borderRadius = "4rem";
    div.style.display = "flex";
    div.innerHTML = `<h2>Image Fetched Successfully</h2>`;
    document.body.appendChild(div);
  }, 2000);
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  const x = Math.random() * 90;
  const y = Math.random() * 90;
  const rot = Math.random() * 360;
  const img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://m.media-amazon.com/images/I/81PGwdUf0OL.jpg"
  );
  img.style.width = "70px";
  img.style.height = "100px";
  img.style.position = "absolute";
  img.style.left = `${x}%`;
  img.style.top = `${y}%`;
  img.style.rotate = `${rot}deg`;
  document.body.appendChild(img);
});

const box = document.querySelector(".container");
const gokuImg = document.querySelector(".goku");

box.addEventListener("mousemove", (e) => {
  const rect = box.getBoundingClientRect();
  const x = e.clientX;
  const y = e.clientY - rect.top;
  gokuImg.style.position = "absolute";
  gokuImg.style.transform = "translate(-50%, -50%)";
  setTimeout(() => {
    gokuImg.style.left = `${x}px`;
    gokuImg.style.top = `${y}px`;
  }, 100);
});

box.addEventListener("mouseleave", () => {});
