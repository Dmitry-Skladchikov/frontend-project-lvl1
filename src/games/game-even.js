import * as game from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => {
  const name = game.userName();
  console.log(game.playerGreeting(name, rules));

  let isCorrect = true;
  let startsNewRound = true;

  do {
    const currentRundomNumber = game.getRandomNumber(1, 20);
    const isNumEven = currentRundomNumber % 2 === 0;
    const expextedAnswer = isNumEven ? 'yes' : 'no';

    game.question(currentRundomNumber);

    const userAnswer = game.userAnswer();

    isCorrect = game.isCorrectAnswer(userAnswer, expextedAnswer);
    startsNewRound = game.startsRound();
  } while (isCorrect && startsNewRound);

  console.log(game.finalMessage(name));
};

export default gameEven;
