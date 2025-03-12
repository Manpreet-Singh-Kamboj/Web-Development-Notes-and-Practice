/*
    Questions on Do-While Loops.
*/

// Question 1. Print Hello world using Do-While.

let i = 1;
do {
  console.log("Hello world!");
  i++;
} while (i <= 5);

// Question 2. Repeat Hello based on User Input.
let userInput;
do {
  console.log("Namaste Duniya!!!");
  userInput = "no" || prompt("Do you want to continue? Yes/No");
} while (userInput.toLowerCase() === "yes");

// Question 3. Guess the number.
let randomNumber = 10 || Math.floor(Math.random() * 100) + 1;
let guess;
do {
  guess = 10 || Number(prompt("Enter your guess b/w 1 to 100: "));
  if (isNaN(guess) || guess < 0 || guess > 100) {
    alert("Invalid Input. Please enter a number");
    continue;
  } else {
    if (guess === randomNumber) {
      alert("Congrats on winning the game. 🎉");
    } else if (guess < randomNumber) {
      alert("Your guess is too low");
    } else {
      alert("Your guess is too high");
    }
  }
} while (guess !== randomNumber);

// Question 5. Sasta Calculator.
let num1, num2, operator, runAgain;
do {
  num1 = Number(prompt("Enter a number: "));
  num2 = Number(prompt("Enter another number: "));
  operator = prompt("Enter an operator (+, -, *, /): ");
  if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input. Please enter numbers.");
    continue;
  }
  switch (operator) {
    case "+":
      alert(`Addition of ${num1} + ${num2} = ${num1 + num2}`);
      break;
    case "-":
      alert(`Subtraction of ${num1} + ${num2} = ${num1 - num2}`);
      break;
    case "*":
      alert(`Multiplication of ${num1} + ${num2} = ${num1 * num2}`);
      break;
    case "/":
      if (num2 > 0) {
        alert(`Division of ${num1} + ${num2} = ${num1 / num2}`);
      } else {
        alert("Invalid input. Division by zero is not allowed.");
      }
      break;
    default:
      alert("Invalid Operator used. Please provide a valid operator.");
      break;
  }
  runAgain = confirm("Do you want to run the program again?");
} while (runAgain);

// Question 5. Restaurant Menu
let wantToRunAgain;
do {
  let dishType = Number(
    prompt(
      "Enter the type of dish you want to see (1. Starters, 2. Main Course, 3. Deserts 4. Exit): "
    )
  );
  if (isNaN(dishType) || dishType < 1 || dishType > 4) {
    alert("Invalid Input.");
    continue;
  } else {
    let dish, continueAgain;
    switch (dishType) {
      case 1:
        do {
          let userInput = Number(
            prompt(
              "Which dish you would like to order? (1. Paneer Tikka, 2. Mushroom Tikka"
            )
          );
          if (isNaN(userInput)) {
            alert("Invalid input. Please enter a number.");
            continue;
          } else {
            switch (userInput) {
              case 1:
                dish = "Paneer Tikka";
                break;
              case 2:
                dish = "Mushroom Tikka";
                break;
              default:
                alert("Invalid choice. Please try again.");
                break;
            }
            alert(`You've selected ${dish}`);
            continueAgain = confirm(
              "Do you want to order something else from Starter?"
            );
          }
        } while (continueAgain);
        break;
      case 2:
        do {
          let userInput = Number(
            prompt(
              "Which dish you would like to order? (1. Paneer Makhni, 2. Kadhai Panner, 3. Butter Naan"
            )
          );
          if (isNaN(userInput)) {
            alert("Invalid input. Please enter a number.");
            continue;
          } else {
            switch (userInput) {
              case 1:
                dish = "Paneer Makhni";
                break;
              case 2:
                dish = "Kadhai Panner";
                break;
              case 3:
                dish = "Butter Naan";
                break;
              default:
                alert("Invalid choice. Please try again.");
                break;
            }
            alert(`You've selected ${dish}`);
            continueAgain = confirm(
              "Do you want to order something else from Main Course?"
            );
          }
        } while (continueAgain);
        break;
      case 3:
        do {
          let userInput = Number(
            prompt(
              "Which dish you would like to order? (1. Gulab Jamun, 2. Ice Cream, 3. Rasgulla"
            )
          );
          if (isNaN(userInput)) {
            alert("Invalid input. Please enter a number.");
            continue;
          } else {
            switch (userInput) {
              case 1:
                dish = "Gulab Jamun";
                break;
              case 2:
                dish = "Ice Cream";
                break;
              case 3:
                dish = "Rasgulla";
                break;
              default:
                alert("Invalid choice. Please try again.");
                break;
            }
            alert(`You've selected ${dish}`);
            continueAgain = confirm(
              "Do you want to order something else from Desserts?"
            );
          }
        } while (continueAgain);
        break;
      case 4:
        wantToRunAgain = false;
        continue;
      default:
        alert("Invalid choice. Please try again.");
        break;
    }
  }
  wantToRunAgain = confirm("Do you want to see the menu again?");
} while (wantToRunAgain);
