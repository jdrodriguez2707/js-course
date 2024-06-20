const owner = "Johan";
const address = "Street 20B";

function dogGreeting(owner, address) {
  console.log(`Hi, I'm ${this.dogName} and I live with ${owner} at ${address}`);
}

const newHouse = {
  dogName: "Frosty",
};

dogGreeting.call(newHouse, owner, address);

const necessaryValues = [owner, address];
dogGreeting.apply(newHouse, necessaryValues);

const bindingWithBind = dogGreeting.bind(newHouse, owner, address);
bindingWithBind();

// Quiz

const cartoon = { name: "Cow and Chick" };

function memory(character) {
  console.log(
    `${this.name} was my favorite cartoon. I loved watching ${character}'s adventures.`
  );
}

memory.call(cartoon, "Cow"); // "Cow and Chick was my favorite cartoon. I loved watching Cow's adventures"
memory.bind(cartoon, "Chick"); // function
