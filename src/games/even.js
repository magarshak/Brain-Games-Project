import { getRandomNumber } from '../tools.js';
import runLogic from '../logic.js';

// Description of the task of the game
const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

// Check if the number is even
const isEven = (number) => number % 2 === 0;

// Setting the range of numbers
const minRange = 1;
const maxRange = 100;

// Generating a new round
const generateRound = () => {
  const question = getRandomNumber(minRange, maxRange);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => runLogic(generateRound, gameTask);
