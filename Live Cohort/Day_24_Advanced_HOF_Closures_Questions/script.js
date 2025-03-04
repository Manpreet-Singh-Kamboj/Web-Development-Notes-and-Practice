/*
    Create a function which takes an callback function and executes it after every n seconds.
*/

function baarBaarChalao(fn, time) {
  setInterval(fn, time * 1000);
}

// baarBaarChalao(function () {
//   console.log("Hello World!");
// }, 3);

/*
    Write a function which returns a function and greet the person with their name.
*/

function greetKaro(greetMessage) {
  return function (name) {
    console.log(greetMessage + " " + name + "!");
  };
}

const greetingFnc = greetKaro("Hello");
greetingFnc("Manpreet");
greetingFnc("Manharjot");
greetingFnc("Manjot");

/*
    Implement a function which accepts a callback function and only executes it once.
*/

function executeOnce(fn) {
  let executed = false;
  return function () {
    if (!executed) {
      fn();
    }
    executed = true;
  };
}

const newFnc = executeOnce(function () {
  console.log("Hello Once");
});

newFnc();
newFnc();
newFnc();
newFnc();

/*
    Implement a function which throttles the callback function. Throttle meaning a kind of cooldown until cooldown is completed the function cannot be called again.
*/

function throttler(fn, delay) {
  let lastCall = 0;
  return () => {
    const currentTime = Date.now();
    if (currentTime - lastCall >= delay) {
      lastCall = currentTime;
      fn();
    }
  };
}

const fn = throttler(() => {
  console.log("Hello World!!");
}, 3000);

fn();
