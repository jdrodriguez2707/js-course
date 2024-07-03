function addNumbers(...numbers) {
  return numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0)
}

console.log(addNumbers(22, 22))