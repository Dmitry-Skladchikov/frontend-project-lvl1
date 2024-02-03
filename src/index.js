import readLineSync from 'readline-sync';

export const userName = () => readLineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

export const playerGreeting = (name, rules) => `Hello, ${name}\n${rules}`;

export const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

export const userAnswer = () => readLineSync.question('Your answer: ');

export const question = (num) => console.log(`Question: ${num}`);

// переменная задает количество раундов в игре
let numberOfRounds = 3;

// переменная хранит результат последнего из ответов
let lastAnswerIsCorrect = true;

// функция проверяет сходится ли ответ пользователя с ожидаемым
export const isCorrectAnswer = (answer, expexted) => {
  if (answer === expexted) {
    console.log('Correctt!');
  } else {
    lastAnswerIsCorrect = false;
    console.log(`${answer} is wrong answer ;(. Correct answer was ${expexted}`);
  }
  return answer === expexted;
};

// функция считающая нужно ли начинать новый раунд
export const startsRound = () => {
  numberOfRounds -= 1;
  return numberOfRounds > 0;
};

// формирует сообщение по итогу игры
export const finalMessage = (name) => {
  const isFinalRound = numberOfRounds === 0;
  const message = (isFinalRound && lastAnswerIsCorrect) ? `Congratulations, ${name}` : `Let's try again, ${name}`;
  return message;
};
