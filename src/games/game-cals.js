import * as game from '../index.js';

const rules = 'What is the result of the expression?';

const giveAnswer = (firstNum, secondNum, operator) => {
  let answer = 0;
  switch (operator) {
    case '+':
      answer = firstNum + secondNum;
      break;

    case '-':
      answer = firstNum - secondNum;
      break;

    case '*':
      answer = firstNum * secondNum;
      break;

    default:
      break;
  }
  return String(answer);
};

const gameCalc = () => {
  const name = game.userName();
  console.log(game.playerGreeting(name, rules));

  const operators = ['+', '-', '*'];

  let isCorrect = true;
  let startsNewRound = false;

  do {
    const firstOPerand = game.getRandomNumber(1, 10);
    const secondOPerand = game.getRandomNumber(1, 10);
    const operator = game.randomElement(operators);
    const expectedAnswer = giveAnswer(firstOPerand, secondOPerand, operator);

    game.question(`${firstOPerand} ${operator} ${secondOPerand}`);
    const userAnswer = game.userAnswer();

    isCorrect = game.isCorrectAnswer(userAnswer, expectedAnswer);
    startsNewRound = game.startsRound();
  } while (isCorrect && startsNewRound);

  console.log(game.finalMessage(name));
};

export default gameCalc;

// добавить в бин эту игру, так же package.json
