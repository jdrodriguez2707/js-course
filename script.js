// Immutable
let number1 = 10;
let number2 = number1;
number1 = 15;
// console.log(number2);

function changeValue(number3) {
  number3 = 12;
}

var number3 = 20;
changeValue(number3);
// console.log(number3);

// Mutable
let person = { name: "Johan", age: 19 };
person.age = 20;
// console.log(person);

let numbers = [1, 2, 3, 4];
numbers[0] = 0;
// console.log(numbers);

function editName(object) {
  object.name = "Frosty";
}

editName(person);
// console.log(person);

let box1 = { toy: "Woody" };
let box2 = box1;

box1.toy = "Buzz Lightyear";
// console.log(box2.toy);

// Objects are passed by memory reference
// Primitive data is passed by value copy
