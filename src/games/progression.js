import { getRandomNumber } from '../tools.js';
import runLogic from '../logic.js';

// Description of the task of the game
const gameTask = 'What number is missing in the progression?';
// Setting the length of the progression
const progressionLength = 10;

// Generating a new round
const generateRound = () => {
  const step = getRandomNumber(1, 5);

  // Generating a random first number of the progression
  const firstNumber = getRandomNumber(1, 100);
  // The resulting series of numbers
  const result = [];
  for (let i = 1; i <= progressionLength; i += 1) {
    result.push(firstNumber + i * step);
  }
  // Selecting a number to hide it
  const secretNumber = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(result[secretNumber]);
  // Hiding a secret number
  result[secretNumber] = '..';
  const question = result.join(' ');

  return [question, correctAnswer];
};

export default () => runLogic(generateRound, gameTask);
