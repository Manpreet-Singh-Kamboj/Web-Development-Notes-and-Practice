console.log("hey1");
setTimeout(() => {
  console.log("hey2");
}, 0);
console.log("hey3");
Promise.resolve().then(() => {
  console.log("hey4");
});

/*
Final Output: 
hey1
hey3
hey4
hey2

Reason: 
1. The synchronous code is added into the call stack and executed on the main thread.
2. The asynchronous code is sent to webAPIs for execution and after resolution it is added into the callback queue.
3. The event loop checks continuously if the call stack is empty, if yes it will add the callback queue code into the call stack and execute it on the main thread.
4. The promise is executed first the the setTimeout because promises have a higher priority than setTimeout.
*/

// Callback Hell

function stepOne(cb) {
  console.log("Step One");
  cb();
}

function stepTwo(cb) {
  console.log("Step Two");
  cb();
}
function stepThree(cb) {
  console.log("Step Three");
  cb();
}

stepOne(() => {
  stepTwo(() => {
    stepThree(() => {
      console.log("Done");
    });
  });
});

const pr = new Promise((resolve, reject) => {
  console.log("Fetching Data...");
  setTimeout(() => {
    reject("Data not fetched");
  }, 2000);
  setTimeout(() => {
    resolve("Data Fetched");
  }, 2000);
});

pr.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});

function step1() {
  return new Promise((resolve, reject) => {
    console.log("Step One");
    resolve("Step One Done");
  });
}

function step2() {
  return new Promise((resolve, reject) => {
    console.log("Step Two");
    resolve("Step Two Done");
  });
}
function step3() {
  return new Promise((resolve, reject) => {
    console.log("Step Three");
    resolve("All Done");
  });
}

step1()
  .then(step2)
  .then(step3)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
