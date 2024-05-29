import { getRandomNumber } from '../tools.js';
import runLogic from '../logic.js';

// Description of the task of the game
const gameTask = 'Find the greatest common divisor of given numbers.';

// Greatest common divisor function
const Gcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return Gcd(num2 % num1, num1);
};

// Setting the range of random numbers
const minRange = 1;
const maxRange = 100;

// Generating a new round
const generateRound = () => {
  // Getting random first and second numbers
  const firstNumber = getRandomNumber(minRange, maxRange);
  const secondNumber = getRandomNumber(minRange, maxRange);
  // Composing a question from random numbers
  const question = `${firstNumber} ${secondNumber}`;
  // Get the correct answer to the question
  const correctAnswer = String(Gcd(firstNumber, secondNumber));

  return [question, correctAnswer];
};

export default () => runLogic(generateRound, gameTask);
