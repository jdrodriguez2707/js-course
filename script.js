// primitive strings
let primitiveString = "I'm a primitive string";
console.log(typeof primitiveString);

let anotherPrimitiveString = String("I'm a primitive string too");
console.log(typeof anotherPrimitiveString);

// strings as objects
let objectString = new String("I'm an object string");
console.log(typeof objectString);

// string manipulation
let greeting = "Hi. How are you?";
console.log(greeting[0]);
console.log(greeting.charAt(5));
console.log(greeting.indexOf("How"));
console.log(greeting.indexOf("JS"));

let firstIndex = greeting.indexOf("H");
console.log(firstIndex);
let secondIndex = greeting.indexOf("H", firstIndex + 1);
console.log(secondIndex);

console.log(greeting.lastIndexOf("H"));
console.log(greeting.length);
console.log(greeting.toLocaleLowerCase());
console.log(greeting.toLocaleUpperCase());

let dividedGreeting = greeting.split(" ");
console.log(dividedGreeting);
console.log(dividedGreeting[3]);
console.log(greeting.replace("Hi", "Hello"));

let greetingWithSpaces = " Hello World ";
console.log(greetingWithSpaces.trim());

console.log(greeting.slice(0, 3));
console.log(greeting.slice(-5));
console.log(greeting.includes("?"));
console.log(greeting.startsWith("H"));
console.log(greeting.endsWith("?"));
console.log(greeting.repeat(2));
console.log(greeting.substring(12, 16));
