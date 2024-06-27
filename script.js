// Exercise: Card Game implementation

const cardsValues = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
const cardSymbols = ["♠", "♣", "♥", "♦"];
const wildCards = ["Joker", "Joker"];
const NUMBER_OF_CARDS_TO_DEAL = 10;

// Create the deck
const deck = [...wildCards];

// for (let i = 0; i < cardsValues.length; i++) {
//   for (let j = 0; j < cardSymbols.length; j++) {
//     deck.push({ value: cardsValues[i], symbol: cardSymbols[j] });
//   }
// }

deck.push(
  ...cardsValues.flatMap((value) =>
    cardSymbols.map((symbol) => ({ value, symbol }))
  )
);

console.log("Original deck: \n", deck);

// Shuffle the deck
for (let i = 0; i < deck.length; i++) {
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * deck.length);

  // Swap the current card with the random card
  deck.splice(randomIndex, 0, deck.splice(i, 1)[0]);
}

console.log("Shuffled deck: \n", deck);

// Deal cards
const player1 = [];
const player2 = [];
const player3 = [];
const player4 = [];

for (let i = 0; i < NUMBER_OF_CARDS_TO_DEAL; i++) {
  // Deal a card to each player
  player1.push(deck.splice(0, 1)[0]);
  player2.push(deck.splice(0, 1)[0]);
  player3.push(deck.splice(0, 1)[0]);
  player4.push(deck.splice(0, 1)[0]);
}

console.log("Player 1: \n", player1);
console.log("Player 2: \n", player2);
console.log("Player 3: \n", player3);
console.log("Player 4: \n", player4);
