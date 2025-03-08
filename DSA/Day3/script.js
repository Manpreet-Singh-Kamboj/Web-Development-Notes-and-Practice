/*
    Question 1. Determine if a given year is a leap year or not.
*/

function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
}

checkLeapYear(2000);
//   checkLeapYear(Number(prompt("Enter a year to check for leap year: ")));

/*
    Question 2. Shop and Discount
    Amount              Discount
    0-5000              0%
    5001-7000           5%
    7001-9000           10%
    More than 9000      20%
*/

let amount = 100 || Number(prompt("Enter your purchase amount: "));
let discount = 0;
if (amount >= 0 && amount <= 5000) {
  discount = 0;
} else if (amount >= 5001 && amount <= 7000) {
  discount = 5;
} else if (amount >= 7001 && amount <= 9000) {
  discount = 10;
} else if (amount > 9000) {
  discount = 20;
} else {
  console.log(amount + " is not a valid amount.");
}

console.log(`Final Amount: ${amount - (amount * discount) / 100}`);

/*
    Question 3. Electricity Bill
    Unit            Price
    Upto 100        Rs 4.2/Unit
    101-200         Rs 6/Unit
    201-400         Rs 8/Unit
    More than 400   Rs 13/Unit
*/

let electricityUnits = 600 || Number(prompt("Enter your electricity units: "));
let electricityPrice = 0;

// Brute Force Solution
if (electricityUnits > 0 && electricityUnits <= 100) {
  electricityPrice = electricityUnits * 4.2;
} else if (electricityUnits > 100 && electricityUnits <= 200) {
  electricityPrice = 100 * 4.2 + (electricityUnits - 100) * 6;
} else if (electricityUnits > 200 && electricityUnits <= 400) {
  electricityPrice = 100 * 4.2 + 100 * 6 + (electricityUnits - 200) * 8;
} else if (electricityUnits > 400) {
  electricityPrice =
    100 * 4.2 + 100 * 6 + 200 * 8 + (electricityUnits - 400) * 13;
}

console.log(`Electricity Bill: ${electricityPrice}`);

electricityPrice = 0;

// Optimized Force Solution
if (electricityUnits > 400) {
  const units = electricityUnits - 400;
  electricityPrice += units * 13;
  electricityUnits = 400;
}
if (electricityUnits > 200 && electricityUnits <= 400) {
  const units = electricityUnits - 200;
  electricityPrice += units * 8;
  electricityUnits = 200;
}
if (electricityUnits > 100 && electricityUnits <= 200) {
  const units = electricityUnits - 100;
  electricityPrice += units * 6;
  electricityUnits = 100;
}
if (electricityUnits > 0 && electricityUnits <= 100) {
  electricityPrice += electricityUnits * 4.2;
  electricityUnits = 0;
}

console.log(`Electricity Bill: ${electricityPrice}`);

/*
    Types of Loops in JS: 
    1. Entry Level Loop: We have control over entry condition.
        1. For Loop
        2. While Loop
    2. Exit Level Loop: We only have control over exit condition.
        1. Do-While Loop
*/

for (let i = 1; i <= 5; i++) {
  console.log("Hello, World!");
}
