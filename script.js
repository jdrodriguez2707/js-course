// Game: Guess the secret word

alert(`Welcome to the game: Guess the secret word! 🧐\n
The challenge is to guess a secret word.
You only have three attempts.`);

const words = [
  { platzi: "A platform to learn programming." },
  { javascript: "A programming language." },
  { programming: "The act of writing code." },
  { developer: "A person who writes code." },
  { frontend: "The part of the website that users interact with." },
  { backend: "The part of the website that users don't see." },
  { fullstack: "A developer who works on both frontend and backend." },
  { code: "Instructions that a computer can understand." },
  { algorithm: "A set of instructions to solve a problem." },
  { database: "A place to store data." },
];
const secretWordObject = getRandomWord(words);
const TOTAL_ATTEMPTS = 3;

startGame();

function getRandomWord(wordList) {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
}

function startGame() {
  let userSupposition;
  const secretWord = Object.keys(secretWordObject)[0];
  const hint = Object.values(secretWordObject)[0];

  for (let attempts = 1; attempts <= TOTAL_ATTEMPTS; attempts++) {
    userSupposition = prompt(
      `Let's get started! 🙂\nTry to guess the secret word 🔐\nHint: ${hint}`
    );

    if (!userSupposition) {
      alert("Please enter a guess.");
      attempts--;
      continue;
    }

    if (userSupposition.toLowerCase() === secretWord) {
      alert(`You're right! That's the word: '${secretWord}'`);
      break;
    } else {
      alert(
        `You're wrong. That's not the word.\n${
          attempts < TOTAL_ATTEMPTS
            ? `You have ${TOTAL_ATTEMPTS - attempts} attempts left.`
            : `You have no more attempts left.`
        }`
      );
    }
  }

  alert(
    userSupposition.toLowerCase() === secretWord
      ? "Congratulations! You did it 🎉"
      : `You lost ☹️. The word was '${secretWord}'. Good luck next time`
  );

  restartGame();
}

function restartGame() {
  if (confirm("Do you want to play again?")) {
    location.reload();
  } else {
    alert("Thanks for playing! 👋");
  }
}
