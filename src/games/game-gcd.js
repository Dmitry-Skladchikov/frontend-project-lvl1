import * as game from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  let firstNum = num1;
  let secondNum = num2;
  while (firstNum !== 0 && secondNum !== 0) {
    if (firstNum > secondNum) {
      firstNum %= secondNum;
    } else {
      secondNum %= firstNum;
    }
  }
  return String(firstNum + secondNum);
};

const gameGcd = () => {
  const name = game.userName();
  console.log(game.playerGreeting(name, rules));

  let isCorrect = true;
  let startsNewRound = true;

  do {
    const firstRansomNumber = game.getRandomNumber(1, 100);
    const secondRansomNumber = game.getRandomNumber(1, 100);

    const expextedAnswer = findGcd(firstRansomNumber, secondRansomNumber);

    game.question(`${firstRansomNumber} ${secondRansomNumber}`);

    const userAnswer = game.userAnswer();

    isCorrect = game.isCorrectAnswer(userAnswer, expextedAnswer);
    startsNewRound = game.startsRound();
  } while (isCorrect && startsNewRound);

  console.log(game.finalMessage(name));
};

export default gameGcd;
