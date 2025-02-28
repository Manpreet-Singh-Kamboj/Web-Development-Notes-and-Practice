// Remove Duplicates Numbers from an Array
// Basic Approach: Add all the elements in an Set. (Set is an Data Structure which only stores unique elements). After adding all elements of array in an set it gives us a Set Object then we need to convert it back to an array using Spread operator(...).

let arr = [1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 6, 7];
console.log(arr);

let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1,2,3,4,5,6,7]

// Find the Second largest element in an array
// Basic Approach: Add all the elements in an Set to get only unique elements then Sort the array in ascending order using sort method. and return the Second last element from the array. or Sort in Descending order using anonymous function or reverse the array and return Second index.

let arr2 = [10, 20, 50, 60, 20, 60, 50, 40];
let uniqueArr2 = [...new Set(arr2)];
uniqueArr2.sort().reverse();
let ans = uniqueArr2.sort(function (a, b) {
  return b - a;
});
console.log(uniqueArr2[1]);
console.log(ans[1]);

// Sort an Array in descending order
// Basic Approach: Use sort method and pass an anonymous function which takes 2 values a,b if we return a-b it sorts in ascending order and return b-a sorts in descending order.

let arr3 = [1, 2, 5, 4, 3];

arr3.sort(function (a, b) {
  return b - a;
});

console.log(arr3);

// Reverse an Array
// Basic Approach: Use reverse method to reverse the array or print the array from last index till 0.
let arr4 = [3, 4, 2, 5];
arr4.reverse();
console.log(arr4);
console.log(arr4);
for (let i = arr4.length - 1; i >= 0; i--) {
  console.log(arr4[i]);
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

let i = 0,
  j = arr4.length - 1;

while (i < j) {
  swap(i, j, arr4);
  i++;
  j--;
}

console.log(arr4);

// Find the most frequent element in the array

// Basic Approach: Use a map and store all values in it with the number of times it appears.

// Approach 1
let arr5 = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5];
const map = new Map();

for (let i = 0; i < arr5.length; i++) {
  if (map.has(arr5[i])) {
    map.set(arr5[i], map.get(arr5[i]) + 1);
  } else {
    map.set(arr5[i], 1);
  }
}
let mostFrequentElement = 0,
  cnt = 0;

for (let key of map) {
  if (key[1] > cnt) {
    mostFrequentElement = key[0];
    cnt = key[1];
  }
}

console.log(mostFrequentElement);

// Approach 2
let obj = {};
for (let i = 0; i < arr5.length; i++) {
  obj[arr5[i]] === undefined ? (obj[arr5[i]] = 1) : obj[arr5[i]]++;
}
mostFrequentElement = -1;
cnt = 0;
Object.entries(obj).forEach(function (entry) {
  if (entry[1] > cnt) {
    mostFrequentElement = entry[0];
    cnt = entry[1];
  }
});

console.log(parseInt(mostFrequentElement));
