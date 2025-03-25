const arr = [
  {
    id: 1,
    team: "RCB",
    primaryColor: "red",
  },
  {
    id: 2,
    team: "CSK",
    primaryColor: "yellow",
  },
  {
    id: 3,
    team: "KKR",
    primaryColor: "purple",
  },
  {
    id: 4,
    team: "PBKS",
    primaryColor: "red",
  },
  {
    id: 5,
    team: "RR",
    primaryColor: "bisque",
  },
  {
    id: 6,
    team: "DC",
    primaryColor: "aqua",
  },
  {
    id: 7,
    team: "LSG",
    primaryColor: "white",
  },
  {
    id: 8,
    team: "SRH",
    primaryColor: "green",
  },
  {
    id: 9,
    team: "GT",
    primaryColor: "orange",
  },
  {
    id: 10,
    team: "MI",
    primaryColor: "blue",
  },
];

const btn = document.getElementById("btn");
const winningTeamH1 = document.getElementById("winningTeam");
const winningTeamContainer = document.querySelector(".winning-container");
btn.addEventListener("click", function () {
  const randomElement = Math.floor(Math.random() * arr.length);
  winningTeamContainer.style.backgroundColor = arr[randomElement].primaryColor;
  winningTeamH1.innerHTML = arr[randomElement].team;
});
