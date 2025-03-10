let n = 10 || Number(prompt("Enter a number: "));

if (isNaN(n)) {
  console.log(`Invalid Input`);
} else {
  for (let i = 1; i <= n; i++) {
    console.log("Hello World! ", i);
  }
}

let m = 12 || Number(prompt("Enter a number: "));

if (isNaN(m)) {
  console.log(`Invalid Input`);
} else {
  for (let i = 1; i <= m; i++) {
    console.log(i);
  }
}

let o = 10 || Number(prompt("Enter a number: "));

if (isNaN(o)) {
  console.log(`Invalid Input`);
} else {
  let sum = 0;
  for (let i = 1; i <= o; i++) {
    sum += i;
  }
  console.log(`Sum of 1 to ${o}: ${sum}`);
}

let j = 5 || Number(prompt("Enter a number: "));

if (isNaN(o)) {
  console.log(`Invalid Input`);
} else {
  let factorial = 1;
  for (let i = 1; i <= j; i++) {
    factorial *= i;
  }
  console.log(`Factorial of ${j}: ${factorial}`);
}

let k = 50 || Number(prompt("Enter a number: "));

if (isNaN(k)) {
  console.log(`Invalid Input`);
} else {
  let evenSum = 0,
    oddSum = 0;
  for (let i = 1; i <= k; i++) {
    if (i % 2 === 0) {
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  console.log(`Even Sum of ${j}: ${evenSum}`);
  console.log(`Odd Sum of ${j}: ${oddSum}`);
}

let l = 50 || Number(prompt("Enter a number: "));

if (isNaN(l)) {
  console.log(`Invalid Input`);
} else {
  // Brute Force Solution Factorials of a Number
  for (let i = 1; i <= k; i++) {
    if (l % i === 0) {
      console.log(i);
    }
  }
  // Better Solution Factorials of a Number
  for (let i = 1; i <= k / 2; i++) {
    if (l % i === 0) {
      console.log(i);
    }
  }
  console.log(k);
}

const p = 11 || Number(prompt("Enter a number: "));
if (isNaN(p)) {
  console.log(`Invalid Input`);
} else {
  // Brute Force Solution Prime Number or Not
  let isPrime = true;
  for (let i = 2; i < p; i++) {
    if (p % i === 0) {
      console.log(`${p} is not a prime number.`);
      isPrime = false;
      break;
    }
  }
  isPrime && console.log(`${p} is a prime number.`);

  // Better Solution Prime Number or Not
  isPrime = true;
  for (let i = 2; i < Math.floor(p / 2); i++) {
    if (p % i === 0) {
      console.log(`${p} is not a prime number.`);
      isPrime = false;
      break;
    }
  }
  isPrime && console.log(`${p} is a prime number.`);

  // Optimal Solution Prime Number or Not
  isPrime = true;
  for (let i = 2; i < Math.floor(Math.sqrt(p)); i += 2) {
    if (p % i === 0) {
      console.log(`${p} is not a prime number.`);
      isPrime = false;
      break;
    }
  }
  isPrime && console.log(`${p} is a prime number.`);
}
