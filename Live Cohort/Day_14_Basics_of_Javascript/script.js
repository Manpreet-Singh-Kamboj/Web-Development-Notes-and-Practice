/* 
    Data Types in Javascript
    1. Primitive: number, string, boolean, null, undefined
    2. Reference: Array, Object, Function
*/

var a = "10";
var b = "20";
var numA = Number(a);
var numB = Number(b);
console.log(a + " " + b); // Output 10 20
console.log(numA + numB); // Output 30

var bigIntNum = 1000000000000000000000000000n;
console.log(bigIntNum);

/* 
    Hoisting in Javascript
*/

console.log(hoistVar);

var hoistVar = 20;

console.log(hoistVar);

/*
    Conditionals in Javascript
    if(condition){
        code to be executed
    }else if(condition2){
        code to be executed
    }else{
        code to be executed
    }
*/

var num = 10;

if (num > 12) {
  console.log("Number is greater than 12");
} else {
  console.log("Number is not greater than 12");
}

if ("10" == 10) {
  console.log("Equal");
}

if ("10" === 10) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}

// var userAge = Number(prompt("Enter your age: "));

// if (!isNaN(userAge) && userAge >= 18) {
//   console.log("Adult");
// } else if (!isNaN(userAge) && userAge < 18) {
//   console.log("Not Adult");
// }

var electricityUnits = Number(prompt("Enter your electricity units: "));
var bill;
if (electricityUnits >= 100) {
  bill = electricityUnits * 10 + " Rs";
} else if (electricityUnits >= 50 && electricityUnits < 100) {
  bill = electricityUnits * 8 + " Rs";
} else {
  bill = electricityUnits * 6 + " Rs";
}

alert("Your Electricity Bill is " + bill);

// var a = 10;
// var b = 20;
// a > b ? console.log("A is greater than B") : console.log("A is Smaller than B");

var a = 10;
var b = 20;

while (a <= b) {
  console.log(a);
  a++;
}

for (let i = 0; i <= 15; i++) {
  console.log(i);
}
