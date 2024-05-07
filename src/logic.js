import readlineSync from 'readline-sync';

export const roundsNumber = 3;

const runLogic = (generateRound, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameTask);

  // Generate rounds and random numbers
  for (let i = 0; i < roundsNumber; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    // Request a response from the user
    const userAnswer = readlineSync.question('You answer: ');
    // Сheck the condition
    // The condition under which the user's response is correct:
    if (userAnswer === answer) {
      console.log('Correct!');
    // The condition under which the user's response is wrong:
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runLogic;
