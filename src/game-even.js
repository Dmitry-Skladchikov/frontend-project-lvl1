import readLineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const playerName = readLineSync.question('May I have your name? ');

const playerGreeting = () => {
  const greeting = `Hello, ${playerName}`;

  return greeting;
};

const getRandomNumber = () => {
  const maxRandomNum = 20;
  const minRandomNum = 1;
  const randomNum = Math.round(Math.random() * (maxRandomNum - minRandomNum) + minRandomNum);

  return randomNum;
};

const gameEven = () => {
  console.log(playerGreeting());
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;
  let isCorrectAnswer = true;

  do {
    const currentRundomNumber = getRandomNumber();
    const isNumEven = currentRundomNumber % 2 === 0;
    const expextedAnswer = isNumEven ? 'yes' : 'no';

    console.log(`Question: ${currentRundomNumber}`);

    const userAnswer = readLineSync.question('Your answer: ');
    const isCorrect = (isNumEven && userAnswer === 'yes') || (!isNumEven && userAnswer === 'no');

    if (isCorrect) {
      correctAnswers += 1;
      console.log('Correctt!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${expextedAnswer}`);
      isCorrectAnswer = false;
    }
  } while (isCorrectAnswer && correctAnswers < 3);

  const message = correctAnswers === 3 ? `Congratulations, ${playerName}` : `Let's try again, ${playerName}`;

  console.log(message);
};

export default gameEven;
