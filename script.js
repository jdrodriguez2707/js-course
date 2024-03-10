// Escape characters
const degree = "I'm software engineer";
// console.log(degree);
const degree2 = 'I\'m software engineer';
// console.log(degree2);
const degree3 = `I'm software engineer`;
// console.log(degree3);

// Long strings
const poem =
  "God is always with me,\n" +
  "He makes me stronger,\n" +
  "and more confident,\n" +
  "So, everything will be okay.";

// console.log(poem);

const poem2 = "God is always with me,\n\
He makes me stronger,\n\
and more confident,\n\
So, everything will be okay.";

// console.log(poem2);

const poem3 = `God\fis always with \bme,
He makes me stronger,\v
and \rmore confident,
So,\teverything will be okay.`;

console.log(poem3);
