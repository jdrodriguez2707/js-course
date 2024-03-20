// Explicit Type Casting

let string = "10";
let integer = parseInt(string);
console.log(integer);
console.log(typeof integer);

let stringDecimal = "1.74";
let float = parseFloat(stringDecimal);
console.log(float);
console.log(typeof float);

let binary = "10011";
let decimal = parseInt(binary, 2);
console.log(decimal);
console.log(typeof decimal);

// Implicit Type Casting

let addition = "1" + 9;
console.log(addition);

let additionWithBoolean = "19" + true;
console.log(additionWithBoolean);

let additionWithNumber = 18 + true;
console.log(additionWithNumber);

let stringValue = "10";
let numberValue = 10;
let booleanValue = true;

console.log(stringValue + stringValue); // Concatenation
console.log(stringValue + numberValue); // Concatenation
console.log(stringValue + booleanValue); // Concatenation

console.log(numberValue + stringValue); // Concatenation
console.log(numberValue + numberValue); // Addition
console.log(numberValue + booleanValue); // Addition

console.log(booleanValue + stringValue); // Concatenation
console.log(booleanValue + numberValue); // Addition
console.log(booleanValue + booleanValue); // Addition

console.log(numberValue + booleanValue + stringValue);
console.log(numberValue + (booleanValue + stringValue));