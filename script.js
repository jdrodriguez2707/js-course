// Functions expressions

const greeting = function (name) {
  return `Hi, ${name}`;
};

// Arrow function with explicit return

const newGreeting = (name) => {
  return `Hi, ${name}`;
};

// Arrow function with implicit return

const newGreetingImplicit = name => `Hi, ${name}`;

// Lexical binding

const fictionalCharacter = {
  name: "Uncle Ben",
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`);
  },
  messageWithArrowFunction: (message) => {
    console.log(`${this.name} says: ${message}`);
  }
};

fictionalCharacter.messageWithTraditionalFunction("With great power comes great responsibility.");
fictionalCharacter.messageWithArrowFunction("Beware of Doctor Octopus."); // There's no binding with arrow functions

// https://chatgpt.com/share/895e5a08-4b2f-481c-918a-9bafff03be8e

