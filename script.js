function Person(name, lastName, age) {
  this.name = name;
  this.lastName = lastName;
  this.age = age;
}

const person1 = new Person("Johan", "Rodriguez", 20);
person1.nationality = "Colombian";
console.log(person1);

const person2 = new Person("Maria", "Perez", 25);
console.log(person2);

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} ${this.lastName}`);
};

const person3 = new Person("Pedro", "Gomez", 30);

person1.greet();
person2.greet();
person3.greet();

console.log(person1);
console.log(person2);
console.log(person3);
