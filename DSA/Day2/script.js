/*
    Maths Functions in JavaScript:
    1. Ceil: Rounds of the value to its nearest upper value.
    2. Floor: Rounds of the value to its nearest lower value.
    3. Round: Rounds the value to the nearest integer. If value after . is greater then .5 then behaves as Math.ceil() else Math.floor().
    4. Abs: Returns the absolute value of the number. Inshort converts negative numbers to positive numbers.
    5. Trunc: Removes the decimal part from the number.
    6. Pow: Takes two parameters, first the number and second the power.
    7. Sqrt: Returns the square root of the number.
    8. Cbrt: Returns the cube root of the number
    9. Max: Take multiple arguments and returns the maximum value.
    10. Min: Take multiple arguments and returns the minimum value.
    11. Random: Returns a random number between 0 and 1.
*/

let a = 3.45;
console.log(Math.ceil(a)); // Output: 4
console.log(Math.floor(a)); // Output: 3
console.log(Math.round(a)); // Output: 3
console.log(Math.round(3.5)); // Output: 4
a = -10;
console.log(Math.abs(a)); // Output: 10
console.log(Math.trunc(15.594958838)); // Output: 15
console.log(Math.pow(5, 3)); // Output: 5^3 = 125
console.log(Math.sqrt(4)); // Output: 2
console.log(Math.cbrt(8)); // Output: 2
console.log(Math.max(10, 20, 30, 40, 50)); // Output: 50
console.log(Math.min(10, 20, 30, 40, 50)); // Output: 10
console.log(Number((Math.random() * 900000 + 100000).toFixed(0))); // Output Random Numbers between 0 to 1000000

// Calculate Compound Interest
/*
    Compound Interest Formula: 
    ci = (p * (1+r/n)^t) - p
*/
// let p = Number(prompt("Enter your principal amount: "));
// let r = Number(prompt("Enter your annual interest rate (0-100): "));
// let t = Number(prompt("Enter number of years: "));

// console.log(Number((p * Math.pow(1 + r / 100, t) - p).toFixed(0)));

// OTP Generator
console.log(Number((Math.random() * 900000 + 100000).toFixed(0)));

// Area of triangle using herons formula
// let s1 = Number(prompt("Enter side 1: "));
// let s2 = Number(prompt("Enter side 2: "));
// let s3 = Number(prompt("Enter side 3: "));

// if (s1 + s2 <= s3 || s1 + s3 <= s2 || s2 + s3 <= s1) {
//   console.log("Not Possible");
// } else {
//   let semiPerimeter = (s1 + s2 + s3) / 2;
//   let area = Math.sqrt(
//     semiPerimeter *
//       (semiPerimeter - s1) *
//       (semiPerimeter - s2) *
//       (semiPerimeter - s3)
//   );
//   console.log(area);
// }

// Circumference of a circle
// let r = Number(prompt("Enter radius of Circle: "));
// console.log(2 * Math.PI * r);
