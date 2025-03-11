/*
    Break and Continue in JavaScript.
*/
const n = 10;
for (let i = 1; i <= n; i++) {
  // Break Terminates the loop and make out code come out of the loop.
  if (i == 7) break;
  // Continue in Javascript skips the current iteration and move ahead.
  if (i == 4) continue;
  console.log(i);
}

const num = 1234 || Number(prompt("Enter a number: "));
let numCopy = num;
// Sum of Digits of a number
let sum = 0;
while (numCopy != 0) {
  const rem = numCopy % 10;
  sum += rem;
  numCopy = Math.floor(numCopy / 10);
}
console.log(sum);

// Reversing a number
let rev = 0;
numCopy = num;
while (numCopy != 0) {
  const rem = numCopy % 10;
  rev = rev * 10 + rem;
  numCopy = Math.floor(numCopy / 10);
}

console.log(rev);

// Automorphic Number: A number whose square has this number init self at the end.

const num1 = 76;
const sqNum = Math.pow(num1, 2);
let num2 = num1;
let cnt = 0;
while (num2 > 0) {
  cnt++;
  num2 = Math.floor(num2 / 10);
}

rev = 0;

const lastDigits = Math.floor(sqNum % Math.pow(10, cnt));
if (lastDigits === num1) console.log("Automorphic Number ");
else console.log("Not an Automorphic Number ");
