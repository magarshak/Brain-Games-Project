import { getRandomNumber } from '../tools.js';
import runLogic from '../logic.js';

// Description of the task of the game
const gameTask = 'What is the result of the expression?';

// Сalculator function
const calc = (num1, operation, num2) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return Error('Wrong operation!');
  }
};

// Generating a random operation
const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const randOperatorIndex = getRandomNumber(0, operations.length - 1);
  return operations[randOperatorIndex];
};

// Setting the range of random numbers
const minRange = 1;
const maxRange = 100;

// Generating a new round
const generateRound = () => {
  // Getting random first and second numbers
  const firstNumber = getRandomNumber(minRange, maxRange);
  const secondNumber = getRandomNumber(minRange, maxRange);
  // Getting a random operation
  const operation = getRandomOperation();
  // Composing a question from random numbers and operation
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  // Calculating the correct answer to the question
  const correctAnswer = String(calc(firstNumber, operation, secondNumber));

  return [question, correctAnswer];
};

const startCalcGame = () => runLogic(generateRound, gameTask);
export default startCalcGame;
