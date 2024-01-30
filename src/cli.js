import readLineSync from 'readline-sync';

export const playerGreeting = () => {
    const playerName = readLineSync.question('May I have your name? ');
    const greeting = `Hello, ${playerName}`;

    return greeting;
};