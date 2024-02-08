import * as game from '../index.js';

const rules = 'What number is missing in the progression?';

const giveProgression = (width, step) => {
  const arr = [];
  const firstNum = game.getRandomNumber(1, 10);
  arr[0] = firstNum;

  for (let i = 1; i < width; i += 1) {
    const element = arr[i - 1] + step;
    arr[i] = element;
  }

  return arr;
};

const formForDisplay = (arr, hiddenIndex) => {
  const newArr = arr;
  newArr[hiddenIndex] = '..';
  const strForDisplay = newArr.join(' ');

  return strForDisplay;
};

const gameProgression = () => {
  const name = game.userName();
  console.log(game.playerGreeting(name, rules));

  let isCorrect = true;
  let startsNewRound = true;

  do {
    const progressionWidth = game.getRandomNumber(5, 10);
    const step = game.getRandomNumber(3, 9);
    const lastIndex = progressionWidth - 1;
    const hiddenIndex = game.getRandomNumber(0, lastIndex);

    // формируем массив
    const progression = giveProgression(progressionWidth, step);

    // получаем элемент под индексом для скрытия
    const expextedAnswer = String(progression[hiddenIndex]);

    // формируем строку для вывода в консоль
    const progressionForDisplay = formForDisplay(progression, hiddenIndex);

    // выводим полученую строку пользователю
    game.question(`${progressionForDisplay}`);

    const userAnswer = game.userAnswer();

    isCorrect = game.isCorrectAnswer(userAnswer, expextedAnswer);
    startsNewRound = game.startsRound();
  } while (isCorrect && startsNewRound);

  console.log(game.finalMessage(name));
};

export default gameProgression;
