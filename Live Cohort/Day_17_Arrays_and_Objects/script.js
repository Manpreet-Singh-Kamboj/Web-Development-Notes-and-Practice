// Rest Operator

function abc(a, b, ...rest) {
  console.log(a, b, rest);
}

abc(1, 2, 3, 4, 5); // Output: 1,2, [3,4,5]

// Hoisting in Javascript: Variables and Functions are declared at the top of the file due to which its not giving an error rather giving undefined.

console.log(a); // Output: undefined but not an error.
var a = 12;
abcd();
function abcd() {
  console.log("Hello, World!!");
}

// IIFE (Immediately Invoked Function Expression) in Javascript

(function bcd() {
  console.log("IIFE!!!");
})();

// Private Variable using IIFE

var ans = (function getA() {
  var b = 12;
  return b;
})();

console.log(ans);

// Advanced IIFE Use

var iifeObj = (function vars() {
  var variable = 50;
  return {
    set: function (val) {
      variable = val;
    },
    get: function () {
      console.log(variable);
    },
  };
})();

iifeObj.get(); // Output: 50
iifeObj.set(100); // Setting variable = 100;
iifeObj.get(); // Output: 100

// Advanced Example IIFE

var libObj = (function myAnimationLibrary() {
  return {
    imageAnimation: function () {
      console.log("Image Animation Library");
    },
    imageHoverEffects: function () {
      console.log("Image Hover Effects Library");
    },
    imageZoom: function () {
      console.log("Image Zoom Library");
    },
    mouseFollower: function () {
      console.log("Mouse Follower Library");
    },
  };
})();

// Higher Order Functions: A function which returns a function or accepts a function in its parameters or does both.

function higherOrderFunction() {
  return function () {
    console.log("Higher Order Function");
  };
}

higherOrderFunction()();

function higherOrderFunction2(callbackFunction) {
  callbackFunction();
}

higherOrderFunction2(function () {
  console.log("Passing this as an Callback function.");
});

// Callback Functions: A function which is passed as a parameter is called Callback function.

function func(callback) {
  console.log("This is a function");
  callback();
}

func(function () {
  console.log("This is a callback function");
});

// First Class Function: It is a position which is given to functions in Javascript that we can use functions as values.
// i.e We can store a function inside variables.

var myFunc = function () {
  console.log("This is a First Class function");
};

myFunc();

// Pure Function: A Function which does not change external or global value.

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Impure Function: A function which modify or change the external or global values are called impure functions.

let total = 0;
console.log(total);
function cnt(val) {
  total += val;
}
cnt(10);
console.log(total);

// Closures: A function which returns a function and it uses the parent functions data is called a Closure.

function outerFunction() {
  let outerVar = 10;
  console.log("Outer Function Var Value: ", outerVar);

  return function () {
    outerVar++;
    console.log("Inner Function Var Value: ", outerVar);
  };
}

var ans = outerFunction();
ans();
ans();
