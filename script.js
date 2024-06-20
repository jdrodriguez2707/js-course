// The 'this' identifier is a reference to the object that is executing in the current context of the code

// Implicit binding

const house = {
  dogName: "Coconut",
  dogGreeting: function () {
    console.log(`Hi, I'm ${this.dogName}`);
  },
};

house.dogGreeting();

// Explicit binding

function dogGreeting() {
  console.log(`Hi, I'm ${this.dogName}`);
}

const newHouse = {
  dogName: "Frosty",
};

dogGreeting.call(newHouse);

function newDogGreeting(owner, address) {
  console.log(`Hi, I'm ${this.dogName} and I live with ${owner} at ${address}`);
}

const owner = "Johan";
const address = "Street 20B";

newDogGreeting.call(newHouse, owner, address);

// function showThis() {
//   console.log(this); 
// }

// showThis(); // Global (Window in browsers)
