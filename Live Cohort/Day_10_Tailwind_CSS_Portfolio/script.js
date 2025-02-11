function changeTime() {
  var dt = new Date();
  var currentTime = dt.getHours() + " : " + dt.getMinutes();
  currentTime += dt.getHours() > 12 ? " PM" : " AM";
  document.querySelector(".time").textContent = currentTime;
}

function getMonth(month) {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
  }
}

function changeDateAndTime() {
  var dt = new Date();
  var currentDate =
    dt.getDate() + " " + getMonth(dt.getMonth() + 1) + ", " + dt.getFullYear();
  var currentTime = dt.getHours() + " : " + dt.getMinutes();
  currentTime += dt.getHours() > 12 ? " PM" : " AM";
  document.querySelector(".footer-time").textContent = currentTime;
  document.querySelector(".footer-date").textContent = currentDate;
}

setInterval(function () {
  changeTime();
  changeDateAndTime();
}, 1000);
