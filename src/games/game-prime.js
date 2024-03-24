import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const isNumberPrime = (num) => {
  for (let i = 2; i <= (num / 2) + 1; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const generateRound = () => {
  const question = getRandomInRange(1, 100);
  const answer = isNumberPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  runEngine(rules, generateRound);
};
