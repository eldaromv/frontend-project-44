import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const initializeRound = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const result = isPrime(number);
  const correctAnswer = result ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => {
  runGame(rules, initializeRound);
};
export default startGame;
