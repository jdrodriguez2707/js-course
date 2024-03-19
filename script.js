// Null
let snoopy = null;
console.log(snoopy);
console.log(typeof snoopy);

// Undefined
let name;
console.log(name);

// Symbol
const UNIQUE_ID = Symbol("id");
console.log(UNIQUE_ID);
console.log(typeof UNIQUE_ID);
const SYMBOL1 = Symbol(1);
const SYMBOL2 = Symbol(1);
console.log(SYMBOL1 === SYMBOL2);

const ID = Symbol("id");
let user = {};
user[ID] = "1234";
console.log(user);

// BigInt
let bigNumber = BigInt(21312983128301983109381902830193812098309128312098390128);
console.log(typeof bigNumber);
console.log(bigNumber);
const numberOfParticlesInTheUniverse = 10n ** 100n; 
console.log(typeof numberOfParticlesInTheUniverse);
console.log(numberOfParticlesInTheUniverse);