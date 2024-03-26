import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

const generateRound = () => {
  const progressionWidth = getRandomInRange(5, 10);
  const progressionStep = getRandomInRange(3, 9);
  const firstNumber = getRandomInRange(1, 10);
  const hiddenIndex = getRandomInRange(0, progressionWidth - 1);

  const progression = generateProgression(firstNumber, progressionStep, progressionWidth);

  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, generateRound);
};
