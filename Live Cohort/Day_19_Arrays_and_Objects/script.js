/*
    Arrays in Javascript:
        Arrays are a collection of elements. We can store only one element in a variable. That's where arrays come into use, where we can store multiple elements inside one variable using arrays.
        Syntax: 
        * var arrayName = [value1, value2, value3,..., valueN];
*/

var array = [1, 2, 3, 4, 5, 6];
console.log(array[2]); // Output: 3
console.log(array);

// Ways to create Arrays

var arr = [];
arr[0] = 1;
arr[1] = 2;
console.log(arr);
var arr2 = new Array();
arr2[0] = 1;
arr2[1] = 2;
console.log(arr2);

// Declaring an array of specific size

var newArr = new Array(50);
console.log(newArr);

for (let i = 0; i < newArr.length; i++) {
  newArr[i] = i;
}

console.log(newArr);

var arr3 = [
  "Manpreet",
  12,
  undefined,
  null,
  function () {},
  { name: "Manpreet" },
];

console.log(arr3);

// Objects in Javascript
//Objects in Javascript is a way to store data in Key-Value pairs in Javascript.

/*
    Syntax: 
    var obj = {
        property: value,
        property: value,
        property: value
    };
*/

var obj = {
  name: "Manpreet Singh",
  age: 22,
};

console.log(obj.name + " " + obj.age);

var obj1 = {};
console.log(obj1);
var obj2 = new Object();
console.log(obj2);
