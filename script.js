let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9)
}

const compareGuesses = (humanGuessInput, computerGuess, targetNumber) => {
  if (Math.abs(humanGuessInput - targetNumber) < Math.abs(computerGuess - targetNumber)) {
    return true
  } else if (Math.abs(humanGuessInput - targetNumber) > Math.abs(computerGuess - targetNumber)) {
    return false
  } else {
    return true
  }
  }

  const updateScore = () => {
    let humanScore = 'human';
    let computerScore = 'computer';
    return String(humanScore || computerScore + 1)
  }

  const advanceRound = () => {
    return Math.floor(currentRoundNumber + 1)
  }
