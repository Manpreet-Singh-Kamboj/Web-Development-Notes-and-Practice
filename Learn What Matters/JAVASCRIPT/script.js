// Word vs Keyword
/* 
    1. Word is a thing which has no meaning in Javascript and
    2. Keyword is a reserved word in Javascript which is known 
    by the Compiler.
    For Eg: chacha is a word and for is a keyword
*/

/* 
    Variables and Constants in Javascript are used to store data
    in the code.
    When we need some kind of data then variables come into 
    action.
    Variables are those whose value can vary and change time
    to time.
    Constants are those whose value cannot change.

    Types of Variables:
        Var, Const and Let keywords in Javascript.
    
    1. var: 
*/

// Var values can be reassigned
var var1 = "apple";
var var2 = "orange";
var1 = "mango";
console.log(var1 + " is better than " + var2);

// Const values can be reassigned
const var3 = "apple";
const var4 = "orange";
// var3 = "mango"; // Will give error TypeError: Assignment to constant variable.
console.log(var3 + " is better than " + var4);

// Let is also used to create variables
let let1 = "apple";
let let2 = "orange";
let1 = "mango";
console.log(let1 + " is better than " + let2);

/*
    Hoisting: Variables and Functions are hoisted which means declaration is moved to the top of code.
*/
console.log(hoist); // Javascript will give this as undefined because it is not yet initialized and is hoisted.
var hoist = "Hoisted Variable."; // Javascript converts it in the following way.
// var hoist;
// hoist = "Hoisted Variable.";

/*
    Undefined Vs Not Defined in Javascript
    Undefined: A variable which exists but exact value is not known
    Not Defined: A variable which does not exist at all.
*/

//console.log(b); // Javascript will give error ReferenceError: b is not defined

/*
    Types in JavaScript:
        1. Primitive
        2. Reference
    
    1. Primitive: number, boolean, string, null, undefined
    2. Reference: [], () , {}
    Aisi koi bhi value jisko copy krne pr real copy nhi hota balki us main value ka reference pass hojata h. Use hum reference value kehte h. Aur jiska copy krne pr real copy hojaye vo primitive hoti h.
*/

var a = 12;
var b = a;
console.log(a, b);

var arr = [1, 2, 3, 4]; // This is an array
var arr2 = arr;
arr2.pop();
console.log(arr2);
console.log(arr); // This will also change because arr2 is reference of arr.

/* 
    Conditionals in Javascript 
    1. If
    2. Else
    3. Else-if

    Jab bhi baat agar magar pr aayegi ya aisa waisa hojaye to conditionals use hote h.
*/

/*
    if(true or false condition){
        this will work if condition matches
    }else if(true or false condition){
        this will work if condition matches
    }else{
        if no condition matches then this works
    }
*/

if (arr !== arr2) {
  console.log(false);
} else if (arr === arr2) {
  console.log("Both are equal.");
} else {
  console.log(true);
}

/*
    Loops
    There are 2 Loops in Javascript:
        1. For Loop
        2. While Loop
    Loop means repeat.
    Examples:
    1 1 1 1 1 1 1 1 1
    1 2 3 4 5 6 7 8 9

    When to use loops?
    * When we want to repeat a task repetitively, so we can run a loop.

    For Loop Syntax: 
        * for(start value; end value; increment value or change value){
        *     code to be executed
        * }
    
    While Loop Syntax: 
        * while(condition){
        *     code to be executed
        * }
        
*/
var str = "";
for (var i = 25; i <= 50; i++) {
  str += i;
  str += " ";
}
console.log(str);
str = "";
var i = 0;
while (i < 12) {
  str += i;
  str += " ";
  i++;
}
console.log(str);

/*
    Functions in Javascript
    Functions are block of code that can be reused to execute some logic.
    Function Syntax:
        * function functionName(parameters){
        *    block of code
        * }
        * 
        * functionName(arguments);
        * arguments are real values which we give while calling the function.
        * parameters are values in which the values of arguments are stored.
*/
function add(num1, num2) {
  return num1 + " + " + num2 + " = " + (num1 + num2);
}

console.log(add(1, 3));
console.log(add(100, 1214));

/*
    Arrays in Javascript
    Arrays are collection of similar type of elements.
    Array Syntax:
        * var arrayName = [value1, value2, value3,..., valueN];
    Array indexes start from 0 to n-1;
    For Eg: [1,2,3,4,5]
    Indexes: 0,1,2,3,4

    Array Basic Methods: 
        1. Push: Used to add an element at the end of the array.
        2. Pop: Used to remove an element from the end of the array.
        3. Shift: Used to remove the first element from the array.
        4. Unshift: Used to add an element at the start of the array.
        5. Splice: Used to remove an element from a specific index and second argument is the number of elements to remove.
*/

var arr3 = [1, 2, 3, 4, 5, 99];
str = "";
for (var i = 0; i < arr3.length; i++) {
  str += arr3[i] + " ";
}
console.log(str);
arr3.push(100);
console.log(arr3);
arr3.pop();
console.log(arr3);
arr3.unshift(101);
console.log(arr3);
arr3.shift();
console.log(arr3);
arr3.splice(1, 2);
console.log(arr3);

/*
    Object in Javascript is holding a value of one thing using key value pairs.
    Object Syntax:
        * var objectName = {
        *                       key1: value1, 
        *                       key2: value2,
        *                       ..., 
        *                       keyN: valueN
        *                   };
*/

var obj = {
  name: "Manpreet Singh",
  email: "manpreet@gmail.com",
  getDetails: function () {
    console.log("Name: " + obj.name + ": Email: " + obj.email);
  },
};

obj.getDetails();
