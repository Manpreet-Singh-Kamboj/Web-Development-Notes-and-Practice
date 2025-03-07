let i = 11;
i = i++ + ++i;
console.log(i); // Output: 24

let a = 11,
  b = 22,
  c;

c = a + b + a++ + b++ + ++a + ++b;
//  11 + 22 + 11 + 22 + 13 + 24 = 103
console.log(c); // Output: 103

i = 0;
i = i++ - --i + ++i - i--;
//  0 - 0 + 1 - 1 = 0
console.log(i); // Output: 1

b = true; // Value: 1 because true is represented as 1 and false as 0
b++; // 1++ = 2;
console.log(b); // Output: 2

i = 1;
let j = 2,
  k = 3;

let m = i-- - j-- - k--;
//      1 - 2 - 3;
console.log("i", i); // Output: 0
console.log("j", j); // Output: 1
console.log("k", k); // Output: 2
console.log("m", m); // Output: -4

a = 1;
b = 2;
console.log(--b - ++a + ++b - --a); // Output: 0
//            1 - 2 + 2 - 1

i = 19;
j = 29;
k = i-- - i++ + --j - ++j + --i - j-- + ++i - j++;
//  19 - 18 + 28 - 29 + 18 - 29 + 19 - 28 = -20
console.log("i", i); // Output: 19
console.log("j", j); // Output: 29
console.log("k", k); // Output: 2 -20

// i = 11;
// j = --(i++); // This will give error because we cannot use unary operators on constant values.
// --(11++) = --12 // Which is not Valid

m = 0;
let n = 0;
let p = --m * --n * n-- * m--; // -1 * -1 * -1 * -1
console.log(p); // Output: 1

a = 1;
a = a++ + ++a * --a - a--;
// 1 + 3 * 2 - 2 = 5 // Because Precedence of Multiply Operator (*) is more than Addition(+) and Subtraction(-) operators so they are solved first.
console.log(a);

// a = 11++; // Error: Cannot use unary operators on constant values.
// console.log(a);

i = 0;
j = 0;
console.log(--i * i++ * ++j * j++); // Output: 1
//            -1 * -1 * 1 * 1 = 1
