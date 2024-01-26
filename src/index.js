#!/usr/bin/env node
import readlineSync from 'readline-sync';

const logicOfGame = (rules, initializeRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(rules);

  let correctAnswers = 0;
  const rounds = 3;

  while (correctAnswers < rounds) {
    const [question, systemAnswer] = initializeRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() === systemAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${systemAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default logicOfGame;
