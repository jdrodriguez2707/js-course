// Social media profile

// 1. User information
let userName = "rafitaDEV";
let fullName = "Johan Rodriguez";
let age = 19;
let isStudent = true;

// 2. Address
const address = {
  street: "26",
  city: "Barranquilla",
  department: "Atlántico",
  zipCode: "080005"
};

// 3. Hobbies
const hobbies = ["watching movies and series", "playing video games", "listening to music"];

// 4. Generating personalized bio
let personalizedBio = `Hi there!👋🏻 My name's ${fullName}, but you can also call me ${userName} 😉.
I'm ${age} years old and it's ${isStudent} that I'm a student 🤓.
I live in ${address.city}, ${address.department} ☀️. 
I love ${hobbies[0]}, ${hobbies[1]} and ${hobbies[2]} 🎥🎮🎧. 
Follow me if you have the same hobbies. I hope to meet you someday.
Have a nice day 😎.`;

// Print user profile 
console.log(personalizedBio);