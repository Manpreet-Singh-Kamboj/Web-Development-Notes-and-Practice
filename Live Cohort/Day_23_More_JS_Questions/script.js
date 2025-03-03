/*
    Make a HOF which take another functions and calls it after 3 seconds.
*/

function caller(func) {
  setTimeout(func, 3000);
}
caller(function () {
  console.log("Hello World!");
});

/*
    Create an Implementation of map function by yourself.
*/

const arr = [1, 2, 3, 4, 5];

function manpreetMap(arr, func) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
}

console.log(
  manpreetMap(arr, function (value) {
    return value * 2;
  })
);

/*
    Write a function that uses closures to create a counter.
*/

function createCounter() {
  let cnt = 0;
  return function () {
    cnt++;
    console.log(cnt);
  };
}

const counter = createCounter();
counter();
counter();
counter();
counter();

/*
    Implement a function that limits how many times another function can be called.
*/

function limitCounter(fn, limit) {
  let totalCalled = 0;
  return function () {
    if (totalCalled < limit) {
      totalCalled++;
      fn();
    } else {
      console.error(
        "Limit exceeded, buy PRO pack to continue using the service."
      );
    }
  };
}

const limit = limitCounter(function () {
  console.log("Hey There!!!");
}, 2);
limit();
limit();
limit();
limit();
limit();
limit();
limit();
limit();
