/*
    Map, Filter and Reduce methods in Javascript.
*/

/*
    Map Function: Can be considered as a for-each loop and it returns a value.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// For each loop
arr.forEach(function (val) {
  console.log(val);
});

var ans = arr.map(function (val) {
  return val;
});

console.log(ans);

/*
        Filter in Javascript
        Filter creates a new array and it only returns true or false.
*/

ans = arr.filter(function (val) {
  return false;
});
console.log(ans); // No Value is added in the new array

ans = arr.filter(function (val) {
  return true;
});

console.log(ans); // Output whole array is returned

ans = arr.filter(function (val) {
  return val % 2 === 0;
});

console.log(ans); // This only returns even numbers from the array

/*
    Reduce Method in javascript
    Reduce is a method that applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single output value.
*/

var sum = ans.reduce((acc, val) => acc + val, 0);

console.log(sum); // Output gives the sum of all elements in the array

var subtract = ans.reduce((acc, val) => acc - val, 0);
console.log(subtract); // Output gives the subtraction of all elements in the array

// Write a for loop to print numbers from 10 to 1 in reverse

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

let start = 10,
  end = 1;

while (start >= end) {
  console.log(start);
  start--;
}

// Write a while loop to print multiples of 3 from 3 to 30.

(start = 3), (end = 30);

while (start <= end) {
  if (start % 3 === 0) console.log(start);
  start += 3;
}

// Write a loop to print sum of 1 to 100.
sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// Use For of loop to iterate over the String Javascript

const str = "Javascript";

for (const char of str) {
  console.log(char);
}

// Remove duplicate values from an array

const array = [1, 2, 2, 3, 3, 3, 4, 5];
// Set removes all duplicate values and only keeps unique values. ... is spread operator which spreads the set object in the form of an array.
ans = [...new Set(array)];

console.log(ans);
