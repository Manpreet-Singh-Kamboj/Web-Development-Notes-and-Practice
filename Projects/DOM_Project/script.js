function openSelectedFeature() {
  const allElems = document.querySelectorAll(".elem");
  const fullElemPages = document.querySelectorAll(".fullElem");
  const allFullElemsBackButton = document.querySelectorAll(".fullElem .back");

  allElems.forEach((elem) => {
    elem.addEventListener("click", () => {
      fullElemPages[elem.id].style.display = "block";
    });
  });

  allFullElemsBackButton.forEach((elem) => {
    elem.addEventListener("click", () => {
      fullElemPages[elem.id].style.display = "none";
    });
  });
}

openSelectedFeature();
