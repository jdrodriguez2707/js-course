// reduce method to know the number of times a word appears in a string

const fruits = [
  "apple",
  "banana",
  "pineapple",
  "apple",
  "apple",
  "banana",
  "pineapple",
  "pineapple",
  "strawberry",
];

const fruitFrequency = fruits.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }

  return accumulator;
}, {});

console.log(fruitFrequency);
