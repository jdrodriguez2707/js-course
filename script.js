alert("Enter a range number to guess");
const min = parseInt(prompt("Enter the minimum value:"));
const max = parseInt(prompt("Enter the maximum value:"));
let userNumber;
const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomNumber);

do {
  userNumber = parseInt(
    prompt(`Try to guess now. Enter a number between ${min} and ${max}:`)
  );
  alert(
    userNumber === randomNumber
      ? "Congratulations! You guessed the number"
      : `Fail :( Try again`
  );
} while (userNumber !== randomNumber);
