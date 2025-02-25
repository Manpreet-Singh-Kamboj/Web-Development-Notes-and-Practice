// Log "Hello Javascript!" in various ways using console
console.log("Hello Javascript!");
console.error("Hello Javascript!");
console.warn("Hello Javascript!");
console.info("Hello Javascript!");
console.table({ name: "Manpreet Singh", age: 22 });

// Perform 35*2-(10/2)+7
console.log(35 * 2 - 10 / 2 + 7);

// Log Datatype of: "123", 123, null, true
console.log(typeof "123");
console.log(typeof 123);
console.log(typeof null); // Object: Because it is well known bug in javascript because the type-tag of Object in js is 000 which is also assigned to null in JS due to which its type is defined as an Object.
console.log(typeof true);

// Write a program to swap two values.
let a = 12;
let b = 10;
console.log(a, b);
let c = a;
a = b;
b = c;
console.log(a, b);
// Swapping without using another variable
a = a + b;
b = a - b;
a = a - b;
console.log(a, b);

// Using destructure
[a, b] = [b, a];
console.log(a, b);

// console.group method
console.group("Aaj ka kharcha");
console.log("Whopper x 2");
console.log("Makhni Burst Burger");
console.log("Blinkit Order");
console.groupEnd();

console.groupCollapsed("Aaj ka kharcha");
console.log("Whopper x 2");
console.log("Makhni Burst Burger");
console.log("Blinkit Order");
console.groupEnd();

// Declare a const object and modify it properties and log the result.

const obj = {
  name: "John Doe",
  age: 30,
  city: "New York",
};
console.log(obj);
obj.name = "Manpreet Singh";
obj.age = 22;
obj.city = "Chandigarh";
// This wont give error because we are not changing the values instead we are changing its properties value.
// If we don't want the object values to change we can use Object.freeze(obj)
Object.freeze(obj);
obj.name = "Test";
console.log(obj);
console.log(obj);

// Convert "50" into number using three different ways
let str = "50";
// Way 1 using Type Conversion
let num = Number(str);
// Way 2 using parseInt method
let num2 = parseInt(str);
// Way 3 by appending + in front of the String
let num3 = +str;
console.log(num, num2, num3);

// Check if Javascript contains script without using includes.

let str2 = "Javascript";
// Way 1 using indexOf
console.log(str2.indexOf("script") !== -1);
// Way 2 using search
console.log(str2.search("script") !== -1);



