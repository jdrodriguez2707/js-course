// const personalizedMessage = () => "Goodbye everybody!";

// function Rocket(name, ownMessage) {
//   this.name = name;
//   this.launchMessage = ownMessage;
// }

// const falcon9 = new Rocket("Falcon 9", personalizedMessage());
// const falconHeavy = new Rocket("Falcon Heavy", personalizedMessage());
// console.log(falcon9);
// console.log(falcon9.name);
// console.log(falcon9.launchMessage);

// const RocketWithArrowFunction = (name, ownMessage) => ({
//   name: name,
//   launchMessage: ownMessage
// });

// const personalizedMessageForArrowFunction = () => "Successful launch!";
// const falcon10 = RocketWithArrowFunction("Falcon10", personalizedMessageForArrowFunction());
// console.log(falcon10);
// console.log(falcon10.name);
// console.log(falcon10.launchMessage);

class Rocket {
  constructor(name) {
    this.name = name;
  }

  personalizedMessage = () => "Goodbye everybody!";
}

const falcon9 = new Rocket("Falcon9");
console.log(falcon9);
console.log(falcon9.name);
console.log(falcon9.personalizedMessage());

const falcon10 = new Rocket("Falcon10");
console.log(falcon10);
console.log(falcon10.name);
console.log(falcon10.personalizedMessage());
