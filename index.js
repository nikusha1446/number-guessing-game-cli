import inquirer from 'inquirer';

const gameConfig = {
  easy: 10,
  medium: 5,
  hard: 3,
};

function displayWelcome() {
  console.log('Welcome to the Number Guessing Game!');
  console.log("I'm thinking of a number between 1 and 100.");
  console.log('You have 5 chances to guess the correct number.');
  console.log('');
}

async function selectDifficulty() {
  const question = {
    type: 'list',
    name: 'difficulty',
    message: 'Please select the difficulty level:',
    choices: [
      { name: 'Easy (10 chances)', value: 'easy' },
      { name: 'Medium (5 chances)', value: 'medium' },
      { name: 'Hard (3 chances)', value: 'hard' },
    ],
  };

  try {
    const answer = await inquirer.prompt(question);
    return answer.difficulty;
  } catch (error) {
    console.error('Error selecting difficulty:', error);
    process.exit(1);
  }
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

async function playGame(difficulty) {
  const targetNumber = generateRandomNumber();
  const maxChances = gameConfig[difficulty];
  let attempts = 0;

  console.log(`Great! You have selected the ${difficulty} difficulty level.`);
  console.log("Let's start the game!");

  while (attempts < maxChances) {
    const question = {
      type: 'input',
      name: 'guess',
      message: 'Enter your guess:',
      validate: function (value) {
        const num = parseInt(value);
        if (isNaN(num)) {
          return 'Please enter a valid number!';
        }
        if (num < 1 || num > 100) {
          return 'Please enter a number between 1 and 100!';
        }
        return true;
      },
    };

    try {
      const answer = await inquirer.prompt(question);
      const userGuess = parseInt(answer.guess);
      attempts++;

      if (userGuess === targetNumber) {
        console.log(
          `Congratulations! You guessed the correct number in ${attempts} attempts.`
        );
        return;
      } else if (userGuess > targetNumber) {
        console.log(`Incorrect! The number is less than ${userGuess}.`);
      } else {
        console.log(`Incorrect! The number is greater than ${userGuess}.`);
      }

      const remainingChances = maxChances - attempts;
      if (remainingChances > 0) {
        console.log(`You have ${remainingChances} chances left.\n`);
      }
    } catch (error) {
      console.error('Error:', error);
      process.exit(1);
    }
  }

  console.log('');
  console.log(`Game Over! You've used all ${maxChances} chances.`);
  console.log(`The correct number was: ${targetNumber}`);
}

async function startGame() {
  displayWelcome();

  const selectedDifficulty = await selectDifficulty();
  await playGame(selectedDifficulty);
}

startGame().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
