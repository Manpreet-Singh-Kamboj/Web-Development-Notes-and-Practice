let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Shift Array By 1 Brute Force Approach
console.log(arr);
function shiftArrayByOnePlaceBruteForceApproach(arr) {
  let copy = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = copy;
  return arr;
}
let k = 11;
k = k % arr.length;
function reverse(arr, i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}
function shiftArrayByKPlace(arr) {
  reverse(arr, k, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, 0, arr.length - 1);
  return arr;
}
function binarySearch(arr, target) {
  let s = 0,
    e = arr.length;
  let mid = Math.floor(s + (e - s) / 2);
  while (s <= e) {
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      s++;
    } else {
      e--;
    }
  }
  return -1;
}
let newArr = shiftArrayByOnePlaceBruteForceApproach(arr);
console.log(newArr);
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr2 = shiftArrayByKPlace(arr);
console.log(newArr2);
arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(binarySearch(arr, 100));
