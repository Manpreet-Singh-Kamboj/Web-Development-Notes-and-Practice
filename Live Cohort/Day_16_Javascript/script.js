console.log("Hello, world!!"); // This will execute immediately as soon as the JS file is compiled

function greet() {
  console.log("Hello, world!!");
} // This will only executed when this function is called
greet(); // Here the function will execute
greet(); // Here the function will execute

function greet(name) {
  console.log("Hello, " + name + "!!");
}

greet("Manpreet Singh");
greet("Manpreet Singh");

// Types of Functions

function abcd() {
  // Function Statement
}

let func = function () {
  // Function Expression
};

// function(){
//     // Anonymous Function
// }

let abc = () => {
  // Fat Arrow Function
};

let fatArrowWithOneParameter = (a) => {
  console.log(a);
};

fatArrowWithOneParameter(20);

let implicitReturnArrowFunction = (a) => a;

console.log(implicitReturnArrowFunction(30));

// Rest parameters in Javascript
function restParameters(a, b, c, ...rest) {
  console.log(a, b, c, rest);
}
restParameters(1, 2, 3, 4, 5, 6, 7, 8, 9);
