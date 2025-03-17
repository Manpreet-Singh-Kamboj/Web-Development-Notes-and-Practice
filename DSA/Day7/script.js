const prompt = require("prompt-sync")();

const n = prompt("Enter a number: ");

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}

console.log();

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log();
}
