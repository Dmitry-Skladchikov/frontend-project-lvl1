import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const giveProgression = (width, step) => {
  const arr = [];
  const firstNum = getRandomInRange(1, 10);
  arr[0] = firstNum;

  for (let i = 1; i < width; i += 1) {
    const element = arr[i - 1] + step;
    arr[i] = element;
  }

  return arr;
};

const hidesTheElement = (arr, hiddenIndex) => {
  const newArr = [...arr];
  newArr[hiddenIndex] = '..';
  const strForDisplay = newArr.join(' ');

  return strForDisplay;
};

const generateRound = () => {
  const progressionWidth = getRandomInRange(5, 10);
  const progressionStep = getRandomInRange(3, 9);
  const hiddenElementIndex = getRandomInRange(0, progressionWidth - 1);

  const progression = giveProgression(progressionWidth, progressionStep);

  const question = hidesTheElement(progression, hiddenElementIndex);
  const answer = String(progression[hiddenElementIndex]);

  return [question, answer];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, generateRound);
};
