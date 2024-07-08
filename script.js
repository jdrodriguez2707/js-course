class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

class Dog extends Animal {
  constructor(name, type, breed) {
    super(name, type);
    this.breed = breed;
  }

  bark() {
    return "Woof! Woof!";
  }
}

const dog = new Dog("Buddy", "Dog", "Golden Retriever");
console.log(dog.toString()); // Buddy is a Dog
console.log(dog.bark()); // Woof! Woof!

// dog.newMethod = function () {
//   return "New Method";
// };

// console.log(dog.newMethod()); 

Dog.prototype.newMethod = function () {
  return "New Method";
}

const dog2 = new Dog("Frosty", "Dog", "Bichon Frisé");
console.log(dog2.newMethod());

// https://chatgpt.com/share/424248f9-641a-4cf4-b3aa-66c812b144d0