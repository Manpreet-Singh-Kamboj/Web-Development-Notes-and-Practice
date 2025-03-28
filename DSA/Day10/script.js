function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] <= arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }
  }
  return arr;
}

const arr = [3, 2, 5, 3, 7, 1, 6, 4, 25, 2, 4];
const bubbleSortAns = bubbleSort([...arr]);
console.log(bubbleSortAns);
const selectionSortAns = selectionSort([...arr]);
console.log(selectionSortAns);
const insertionSortAns = insertionSort([...arr]);
console.log(insertionSortAns);
