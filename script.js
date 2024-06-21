// Vehicle management system

// Traditional function

function Vehicle(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.getInfo = function () {
  return `Vehicle information:\nBrand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}`;
}

const myFirstVehicle = new Vehicle("Mazda", "CX30", "2021");
console.log(myFirstVehicle.getInfo());

// Arrow function

const createCar = (brand, model, year, doors) => ({
  brand: brand,
  model: model,
  year: year,
  doors: doors,
  getCarInfo: function () {
    return `Car information:\nBrand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}\nDoors: ${this.doors}`;
  } 
});

const myFirstCar = createCar("Renault", "Clio", "2011", 4);
console.log(myFirstCar.getCarInfo());

// Classes

class Motorcycle {
  constructor(brand, model, year, type) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.type = type;
  }

  getMotorcycleInfo() {
    return `Motorcycle information:\nBrand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}\nType: ${this.type}`;
  } 
}

const myFirstMotorcycle = new Motorcycle("Honda", "X-ADV", "2022", "Liquid-cooled 4-stroke 8-valve.");
console.log(myFirstMotorcycle.getMotorcycleInfo());
