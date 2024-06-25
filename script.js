// Captain tsubasa players

function Player(name, position, number, nationalSelection) {
  this.name = name;
  this.position = position;
  this.number = number;
  this.nationalSelection = nationalSelection;
  this.isCaptain = false;
  this.displayInfo = function () {
    console.log(`
      Player information:

      Name: ${this.name}
      Position: ${this.position}
      Number: ${this.number}
      National selection: ${this.nationalSelection}
      Captain: ${this.isCaptain ? "Yes" : "No"}
    `);
  };
  this.becomeCaptain = function () {
    this.isCaptain = true;
    console.log(`${this.name} has become captain of ${this.nationalSelection}`);
  };
}

const tsubasa = new Player("Tsubasa Ozora", "MF", "10", "Japan");
const genzo = new Player("Genzo Wakabayashi", "GK", "1", "Japan");
const taro = new Player("Taro Misaki", "MF", "11", "Japan");

// tsubasa.displayInfo();
// genzo.displayInfo();
// taro.displayInfo();

tsubasa.becomeCaptain();

tsubasa.displayInfo();
genzo.displayInfo();
taro.displayInfo();


