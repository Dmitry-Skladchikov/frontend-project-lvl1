import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

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
  return firstNum + secondNum;
};

const generateRound = () => {
  const firstRandomNum = getRandomInRange(1, 100);
  const seconsRansomdNum = getRandomInRange(1, 100);

  const question = `${firstRandomNum} ${seconsRansomdNum}`;
  const answer = String(findGcd(firstRandomNum, seconsRansomdNum));

  return [question, answer];
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runEngine(rules, generateRound);
};
