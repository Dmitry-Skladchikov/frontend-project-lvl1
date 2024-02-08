import * as game from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (num) => {
  for (let i = 2; i <= (num / 2) + 1; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const gamePrime = () => {
  const name = game.userName();
  console.log(game.playerGreeting(name, rules));

  let isCorrect = true;
  let startsNewRound = true;

  do {
    const randomNumber = game.getRandomNumber(1, 100);
    const expextedAnswer = isNumberPrime(randomNumber) ? 'yes' : 'no';

    game.question(`${randomNumber}`);
    const userAnswer = game.userAnswer();

    isCorrect = game.isCorrectAnswer(userAnswer, expextedAnswer);
    startsNewRound = game.startsRound();
  } while (isCorrect && startsNewRound);

  console.log(game.finalMessage(name));
};

export default gamePrime;
