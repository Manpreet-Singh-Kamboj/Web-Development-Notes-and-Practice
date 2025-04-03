const postContainer = document.querySelector(".post");
const likeContainer = document.querySelector(".like-container");
const postFooter = document.querySelector(".post-footer");

postContainer.addEventListener("dblclick", () => {
  const likeIcon = likeContainer.querySelector("i");
  likeContainer.style.opacity = 1;
  likeIcon.style.animation = "like 1.5s forwards";
  setTimeout(() => {
    likeContainer.style.opacity = 0;
    postFooter.querySelector(".icon").style.color = "palevioletred";
    likeIcon.style.animation = "none";
  }, 1000);
});
