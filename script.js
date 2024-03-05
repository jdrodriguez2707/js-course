// Pass by value

let x = 1;
let y = "Hi";
let z = null;

a = x;
b = y;
c = z;

console.log(x, y, z, a, b, c);

a = 12;
b = "Platzi";
c = undefined;

let number = 5;

function editValue(value) {
  value = 10;
}

editValue(number);
console.log(number);

// Pass by reference

let fruits = ["apple"];
fruits.push("pineapple");
console.log(fruits);

let breads = ["🥐"];
let copyOfBreads = breads;
breads.push("🥖");
console.log(breads, copyOfBreads);

let person = { name: "Juan" };

function editName(object) {
  object.name = "Pedro";
}

editName(person);
console.log(person);
