import readLineSync from 'readline-sync';
import playerGreeting from './cli.js';

const roundsCount = 3;

const runEngine = (rules, generateRound) => {
  const name = playerGreeting();
  console.log(rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readLineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runEngine;
