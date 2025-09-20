import inquirer from 'inquirer';

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

async function startGame() {
  displayWelcome();

  const selectedDifficulty = await selectDifficulty();
  console.log(selectedDifficulty);
}

startGame().catch((error) => {
  console.error('Error:', error);
  process.exit(1);
});
