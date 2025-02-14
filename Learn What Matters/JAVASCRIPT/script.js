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
