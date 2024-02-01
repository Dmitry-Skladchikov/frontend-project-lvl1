import readLineSync from 'readline-sync';

const playerGreeting = () => {
  const playerName = readLineSync.question('May I have your name? ');
  const greeting = `Hello, ${playerName}`;

  return greeting;
};

export default playerGreeting;
