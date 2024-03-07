let fruits = {
  orange: "🍊",
};

let vegetables = fruits;
vegetables.orange = "🥦";
console.log(fruits);

let clothes = { coat: "🧥" }; // unused
clothes = { jeans: "👖" }; // new memory reference
clothes;

// The garbage collector collects and deletes memory references that we cannot access
