// Solution 1

// let userAge = Number(prompt("Enter your age: "));

// if (userAge >= 18 && userAge <= 60) {
//   alert("Your are an adult.");
// } else if (userAge > 60) {
//   alert("Your are a senior citizen.");
// } else {
//   alert("You are a minor.");
// }

// Solution 2

// let num1 = Number(prompt("Enter number 1: "));
// let num2 = Number(prompt("Enter number 2: "));

// if ((num1 + num2) % 2 === 0) {
//   alert("The sum is an even number.");
// } else {
//   alert("The sum is an odd number.");
// }

// Solution 3

// let character = prompt("Enter a character: ");

// if (character >= "A" && character <= "Z") {
//   alert("It is an Uppercase character");
// } else if (character >= "a" && character <= "z") {
//   alert("It is a lowercase character");
// } else {
//   alert("It is not a letter");
// }

// Solution 4

// let num1 = Number(prompt("Enter a first number: "));
// let num2 = Number(prompt("Enter a second number: "));
// let num3 = Number(prompt("Enter a third number: "));

// if (num1 > num2 && num1 > num3) {
//   alert(`${num1} is the largest number.`);
// } else if (num2 > num1 && num2 > num3) {
//   alert(`${num2} is the largest number.`);
// } else {
//   alert(`${num3} is the largest number.`);
// }

// Solution 5

// let year = Number(prompt("Enter a year: "));
// if (year % 4 === 0) {
//   alert(`${year} is a leap year.`);
// } else {
//   alert(`${year} is not a leap year.`);
// }

// Solution 6

// let num1 = Number(prompt("Enter first number: "));
// let num2 = Number(prompt("Enter second number: "));
// let operation = prompt(
//   "Enter a operation: Addition(+) Subtraction(-) Multiplication(*) Division(/) Remainder(%)"
// );

// if (operation === "+") {
//   alert(`${num1} + ${num2} = ${num1 + num2}`);
// } else if (operation === "-") {
//   alert(`${num1} - ${num2} = ${num1 - num2}`);
// } else if (operation === "*") {
//   alert(`${num1} * ${num2} = ${num1 * num2}`);
// } else if (operation === "/") {
//   if (num2 === 0) {
//     alert("Cannot divide by zero.");
//   } else {
//     alert(`${num1} / ${num2} = ${num1 / num2}`);
//   }
// } else if (operation === "%") {
//   if (num2 === 0) {
//     alert("Cannot find remainder of zero.");
//   } else {
//     alert(`${num1} % ${num2} = ${num1 % num2}`);
//   }
// }

// Solution 7

// let num = Number(prompt("Enter a positive or negative number: "));
// if (num > 0) {
//   alert("Number is Positive");
// } else if (num < 0) {
//   alert("Number is Negative");
// } else {
//   alert("Number is Zero");
// }
