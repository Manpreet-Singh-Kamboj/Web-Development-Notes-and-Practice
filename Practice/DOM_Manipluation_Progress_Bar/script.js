const btn = document.querySelector(".btn");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");

function downloadFile() {
  progressBar.style.width = "0%";
  progress.innerHTML = "0% Completed";
  btn.innerHTML = "Downloading...";
  btn.style.opacity = 1;
  const interval = setInterval(() => {
    const newProgress = Math.floor(Math.random() * 11);
    const currProgressWidth =
      progressBar.style.width === ""
        ? 0
        : parseInt(progressBar.style.width.split("%")[0]);
    if (currProgressWidth + newProgress >= 100) {
      progressBar.style.width = "100%";
      progress.innerHTML = `100% Completed`;
      btn.innerHTML = "Download Completed";
      btn.style.opacity = 0.5;
      clearInterval(interval);
    } else {
      progressBar.style.width = `${currProgressWidth + newProgress}%`;
      progress.innerHTML = `${progressBar.style.width} Completed`;
    }
  }, 200);
}

btn.addEventListener("click", downloadFile);
