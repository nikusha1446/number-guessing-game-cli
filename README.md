# 🎮 Number Guessing Game

A simple command-line interface (CLI) number guessing game built with Node.js and Inquirer.js.

## ✨ Features

- Interactive CLI interface with arrow key navigation
- Three difficulty levels: Easy (10 chances), Medium (5 chances), Hard (3 chances)
- Random number generation between 1 and 100
- Input validation to ensure valid number entries
- Smart hints - tells you if your guess is too high or too low
- Play again functionality - play multiple rounds without restarting
- Attempt tracking - shows remaining chances and final attempt count

## 🚀 Installation

1. **Clone or download** this project to your local machine

2. **Navigate to the project directory**:
   ```bash
   cd number-guessing-game-cli
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
   
4. **Start the game by running**:
   ```bash
   node index.js
   ```

## 🎯 How to Play

1. **Welcome Screen**: The game will greet you and explain the rules
2. **Select Difficulty**: Use arrow keys to choose your difficulty level:
   - **Easy**: 10 chances to guess
   - **Medium**: 5 chances to guess  
   - **Hard**: 3 chances to guess
3. **Make Your Guesses**: Enter numbers between 1-100
4. **Get Feedback**: The game will tell you if your guess is too high or too low
5. **Win or Lose**: 
   - **Win**: Guess correctly and see your attempt count!
   - **Lose**: Use all chances and the correct number is revealed
6. **Play Again**: Choose whether to play another round

## 📜 Game Rules

- Numbers must be between **1 and 100**
- Only valid numbers are accepted (no letters or symbols)
- You have a limited number of chances based on difficulty
- The game provides "higher" or "lower" hints after each incorrect guess
- Win by guessing the correct number within your attempt limit

## 🎬 Sample Gameplay

```
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.

? Please select the difficulty level: (Use arrow keys)
❯ Easy (10 chances)
  Medium (5 chances)
  Hard (3 chances)

Great! You have selected the easy difficulty level.
Let's start the game!

? Enter your guess: 50
Incorrect! The number is less than 50.
You have 9 chances left.

? Enter your guess: 25
Incorrect! The number is greater than 25.
You have 8 chances left.

? Enter your guess: 35
Congratulations! You guessed the correct number in 3 attempts.

? Do you want to play again? (Y/n)
```

## 💻 Technologies Used

- **Node.js** - JavaScript runtime environment
- **Inquirer.js** - Interactive command line user interfaces

## 📄 License

This project is open source and available under the ISC License.

---

**Enjoy the game! 🎮**
