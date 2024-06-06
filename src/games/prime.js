import { getRandomNumber } from '../tools.js';
import runLogic from '../logic.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Check prime number
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

// Setting the range of random numbers
const minRange = 1;
const maxRange = 100;

// Generating a new round
const generateRound = () => {
  const question = getRandomNumber(minRange, maxRange);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => runLogic(generateRound, gameTask);
