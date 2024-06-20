// Pure functions

// Side effects (when pure functions are no longer pure)
// 1. Modify global variables
// 2. Modify parameters
// 3. HTTP requests
// 4. Print messages on screen or console
// 5. DOM manipulation
// 6. Get current time

function sum(a, b) {
  return a + b;
}

// Impure functions

function sum(a, b) {
  console.log("A: ", a);
  return a + b;
}

let total = 0;

function sumWithSideEffect(a) {
  total += a;
  return total;
}

// Pure function
function square(x) {
  return x * x;
}

function addTen(y) {
  return y + 10;
}

const number = 5;
const finalResult = addTen(square(number));
console.log(finalResult);
