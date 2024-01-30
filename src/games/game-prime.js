import logicOfGame from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNum = (num) => {
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
  const result = primeNum(number);
  const correctAnswer = result ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => {
  logicOfGame(rules, initializeRound);
};
export default startGame;
