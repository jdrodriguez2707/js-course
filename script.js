// Define an object constructor
function Animal(name) {
  this.name = name;
}

// Add a method to the prototype of the Animal constructor
Animal.prototype.greet = function() {
  console.log(`Hello, I'm ${this.name}`);
};

// Create a Dog constructor that inherits from Animal
function Dog(name, breed) {
  Animal.call(this, name); // Call to Animal constructor
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); // Establish the prototype of Dog as Animal
Dog.prototype.constructor = Dog; // Correct the constructor property of Dog

// Create a Dog object
const myDog = new Dog('Max', 'Labrador');
myDog.greet(); // Output: Hello, I'm Max