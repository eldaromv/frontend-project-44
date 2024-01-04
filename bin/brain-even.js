#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no" ');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(num) {
  return num % 2 === 0;
}

let correctAnswers = 0;

while (correctAnswers < 3) {
  const randomNumber = getRandomInt(1, 15);
  console.log('Question:', randomNumber);

  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  if (userAnswer.toLowerCase() === correctAnswer) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    correctAnswers = 0;
  }
}
console.log(`Congratulations, ${userName}!`);
