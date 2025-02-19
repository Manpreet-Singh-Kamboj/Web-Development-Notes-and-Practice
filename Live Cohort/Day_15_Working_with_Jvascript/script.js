// String Methods

// String Declarations
let str1 = "Hello";
let str2 = "Hello";
let str3 = `Hello ${12 + 5}`;

/*
    String is a Collection of Characters
    
    - Slice: Extracts a section of a string without modifying   the original String
    - Split: Used to split a string based on the passed argument.
    - Replace: Replaces the first occurrence of the specified value with specified value
    - ReplaceAll: Replaces all occurrences of the specified value with the specified replacement
    - Includes: Returns true if the string contains the specified value, otherwise false
*/

let str = "Hello, World!!";
console.log(str.slice(0, 5)); // Output: Hello
console.log(str.split("l")); // Output: ['He','','o, Wor','d!!']
console.log(str.replace("e", "j")); // Output: Hjllo, World!!
console.log(str.replaceAll("o", "r")); // Output: Hellr, Wrrld!!
console.log(str.includes("Hello")); // Output True
console.log(str.includes("Kaise ho")); // Output False

// Switch Statements in Javascript

/* Syntax 
    switch(value){
        case value1:
            code block
            break;
        case value2:
            code block
            break;
        default:
            default code block
    }
*/

switch (3) {
  case 1:
    console.log("Case 1");
    break;
  case 2:
    console.log("Case 2");
    break;
  case 3:
    console.log("Case 3");
    break;
  default:
    console.log("Default Case");
    break;
} // Output: Case 3

switch (5) {
  case 1:
    console.log("Case 1");
    break;
  case 2:
    console.log("Case 2");
    break;
  case 3:
    console.log("Case 3");
    break;
  default:
    console.log("Default Case");
    break;
} // Output: Default Case

do {
  console.log("Do While Condition"); // Output: Do While Condition Printed Once
} while (11 > 12);
