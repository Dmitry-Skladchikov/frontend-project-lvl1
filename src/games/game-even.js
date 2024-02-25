import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const currentNumber = getRandomInRange(1, 20);
  const answer = currentNumber % 2 === 0 ? 'yes' : 'no';

  return [`${currentNumber}`, answer];
};

const gameEven = () => {
  runEngine(rules, generateRound);
};

export default gameEven;
