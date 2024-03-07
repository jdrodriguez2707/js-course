// Strings
let firstOption = 'Single quotes';
let secondOption = "Double quotation marks";
let thirdOption = `Grave accent`;

// Concatenation (+)
let address = "Cra. 123 #45-12";
let city = "Colombia";
let fullAddress = "My address is " + address + city;
fullAddress;
let addressWithoutSpace = "My address is " + address + " " + city;
addressWithoutSpace;

// Concatenation (Template literals)
let firstName = "Johan Rodriguez";
let country = "CO";
let profile = `My profile says "${firstName} - ${country}"`;
profile;

// Concatenation (join())
let idea1 = "I love";
let idea2 = "Korean";
let idea3 = "people";
let thoughts = [idea1, idea2, idea3];
console.log(thoughts.join("🥢"));

// Concatenation (concat())
let hobby1 = "watching movies or series";
let hobby2 = "listening to music";
let hobby3 = "playing video games";
let hobbies = "My hobbies are: ".concat(hobby1, ", ", hobby2, ", and ", hobby3, ".");
hobbies;
