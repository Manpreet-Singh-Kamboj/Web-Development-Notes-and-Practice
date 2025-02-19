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

// Solution 8

// let username = prompt("Enter your name: ");
// let time = prompt(
//   "Enter your current time in 24 hour format such as (10 AM or 13 PM): "
// );

// let timeNum = time.split(" ")[0];
// let timePeriod = time.split(" ")[1];

// if (timeNum < 12) {
//   alert(`Good Morning, ${username}`);
// } else if (timeNum > 12 && timeNum <= 17) {
//   alert(`Good Afternoon, ${username}`);
// } else if (timeNum > 17 && timeNum < 21) {
//   alert(`Good Evening, ${username}`);
// } else {
//   alert(`Good Night, ${username}`);
// }

// Solution 9

// let lightColor = prompt("Enter Traffic light color: ");
// if (lightColor === "Red") {
//   alert("Stop!");
// } else if (lightColor === "Yellow") {
//   alert("Get Ready!");
// } else {
//   alert("Go!");
// }

// Solution 10

// let num = prompt("Enter a number for which table you want to print: ");
// for (let i = 1; i <= 10; i++) {
//   console.log(num * i);
// }

// Solution 11

// let marks = prompt("Enter your marks: ");

// if (marks >= 90 && marks <= 100) {
//   alert("Grade: A");
// } else if (marks >= 80 && marks < 90) {
//   alert("Grade: B");
// } else if (marks >= 70 && marks < 80) {
//   alert("Grade: C");
// } else if (marks >= 60 && marks < 70) {
//   alert("Grade: D");
// } else {
//   alert("Grade: F");
// }

// Solution 12

// let username = "manpreet3033";
// let password = "1234";

// let enteredUsername = prompt("Enter your username: ");
// let enteredPassword = prompt("Enter your password: ");

// if (enteredUsername !== username || enteredPassword !== password) {
//   alert("Invalid credentials!");
// } else {
//   alert("Login successful!");
// }

// Solution 13

// let num1 = 10;
// let num2 = 20;

// console.log("Num 1: ", num1, "Num 2: ", num2);

// num1 ^= num2;
// num2 ^= num1;
// num1 ^= num2;

// console.log("Num 1: ", num1, "Num 2: ", num2);

// Solution 14

// let num = prompt("Enter a number: ");

// if (num % 3 === 0 && num % 5 === 0) {
//   alert("FizzBuzz");
// } else if (num % 3 === 0 && num % 5 !== 0) {
//   alert("Fizz");
// } else if (num % 3 !== 0 && num % 5 === 0) {
//   alert("Buzz");
// } else {
//   alert(num);
// }

// Solution 15

// let num = Number(prompt("Enter a number: "));
// let reversedNum = "";
// while (num > 0) {
//   let remainder = num % 10;
//   reversedNum += String(remainder);
//   num = Math.floor(num / 10);
// }

// alert(`Reversed Number: ${reversedNum}`);

// Solution 16

// let num = Number(prompt("Enter a number: "));
// let sum = 0;
// while (num > 0) {
//   let remainder = num % 10;
//   sum += remainder;
//   num = Math.floor(num / 10);
// }

// alert(`Sum of digits: ${sum}`);
