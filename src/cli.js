import readLineSync from 'readline-sync';

let name = '';

export const playerGreeting = () => {
  console.log('Welcome to the Brain Games!');

  name = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
};

export const getUserName = () => name;
