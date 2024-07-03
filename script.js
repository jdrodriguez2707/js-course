let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// let value = matrix[0][1]
// console.log(value)

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j])
  }
}

function findElement(matrix, element) {
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
      if (matrix[i][j] === element) {
        return true
      }
    }
  }
  return false
}

console.log(findElement(matrix, 5))

// shallow copy
let newMatrix = [...matrix];
console.log(newMatrix);

newMatrix[0][0] = 10;
console.log(matrix);
console.log(newMatrix); 


// deep copy
function duplicateMatrix(matrix) {
  let newMatrix = []
  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [...matrix[i]]
  }
  return newMatrix
}
const matrixWithDeepCopy = duplicateMatrix(matrix)
console.log(matrixWithDeepCopy);

matrix[0][2] = -1;
console.log(matrix);
console.log(matrixWithDeepCopy); 