let integer = 10;
let decimal = 3.14;
console.log(typeof integer, typeof decimal);

let scientificNotation = 5e3;
console.log(scientificNotation);

let notANumber = NaN;
console.log(notANumber);

let infinite = Infinity;
console.log(infinite);

let addition = 2 + 2;
let subtraction = 10 - 4;
let multiplication = 2 * 4;
let division = 10 / 2;
let remainder = 20 % 2;
let exponentiation = 2 ** 3;

// Precision
let result = 0.1 + 0.2;
result;
let newResult = result.toFixed(1);
console.log(newResult);
console.log(result === 0.3);

// Advance operations
console.log(Math.sqrt(16));
console.log(Math.abs(-5));
console.log(Math.random());
console.log(Math.round(3.6));
console.log(Math.round(result * 100) / 100);
console.log(Math.floor(9.99999));
console.log(Math.ceil(1.0000001));
