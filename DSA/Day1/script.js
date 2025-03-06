/*
    Difference between let and var
    1. Var is Function Scoped and Let is Block Scoped.
    2. Var variables are hoisted but let variables are not hoisted.
    3. Var variables are added in the window object but let variables are not added in the window object.
*/

/*
    Question 1.  Sum of two integers.
*/
let a = 10;
let b = 30;
console.log(a + b);

/*
    Question 2. Relationship between Integers and Strings.
    Answer 2. 
        string + string = string (Concatenation)
        string + integer = string (Concatenation)
        integer + integer = integer (Arithmetic Addition)
        integer + string = string (Concatenation)
*/
// string + string = string (Concatenation)
let str1 = "Hello";
let str2 = "World";
console.log(str1 + str2);

// string + integer = string (Concatenation)
let str3 = "Hello";
let str4 = 10;
console.log(str3 + str4);

// integer + integer = integer (Arithmetic Addition)
let c = 10;
let d = 20;
console.log(c + d);

/*
    Question 3. Sum and Message.
*/
c = 30;
d = 50;
console.log("Sum of " + c + " and " + d + " is " + c + d);
// "Sum of 30" + " and " + 50 + " is " + 30 + 50
// "Sum of 30 and " + 50 + " is " + 30 + 50
// "Sum of 30 and 50" + " is " + 30 + 50
// "Sum of 30 and 50 is " + 30 + 50
// "Sum of 30 and 50 is 30" + 50
// "Sum of 30 and 50 is 3050" // Final Output: If we want to perform arithmetic operation then we can use brackets and wrap c+d in brackets like (c+d). and now it will follow BODMAS rules of Mathematics and Solve brackets first.

/*
    Question 4. Type Coercion
*/

a = 10;
b = "20";
console.log(a + b); // Output 1020 // Because JS Converts the Integer to a String and Concatenate both.

a = 1;
b = 1;
console.log(a + b); // Output 2 // Arithmetic operation

a = 1;
b = "1";
console.log(a - b); // Output 0 // JS Converts b into integer according to the operation.

/*
    Question 5. Take input and Print answer.
*/
// let age = prompt("Enter your age:");
// console.log(parseInt(age));

/*
    Question 6. Swap 2 variables using 3 methods.
*/
// Method 1. Using a Third Variable.
a = 10;
b = 20;
console.log("A is", a);
console.log("B is", b);
c = a;
a = b;
b = c;

console.log("A is", a);
console.log("B is", b);

// Method 2. Using No temporary variable.
a = 10;
b = 20;
console.log("A is", a);
console.log("B is", b);
a = a + b;
b = a - b;
a = a - b;
console.log("A is", a);
console.log("B is", b);

// Method 3. Using Destructuring Assignment.
a = 10;
b = 20;
console.log("A is", a);
console.log("B is", b);
[a, b] = [b, a];
console.log("A is", a);
console.log("B is", b);

/*
    Operators in Javascript: 
    1. Arithmetic Operators (+, -, *, /, %)
    2. Relational Operators (<, >, <=, >=, !=,!==, ==, ===)
    3. Logical Operators (&&, || , ~)
    4. Unary Operator (++, --)
*/
