import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const generateRound = () => {
  const question = getRandomInRange(1, 20);
  const answer = question % 2 === 0 ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(rules, generateRound);
};
