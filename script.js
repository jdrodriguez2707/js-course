// Exercise: Add all the numbers of an array

const numbers = [1, 12, 19, 21, 17, 18, 67];
let sum = 0;
// const sum = numbers.reduce((accumulator, currentNumber) => {
//   return accumulator + currentNumber;
// }, 0);
// console.log(sum);

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);
