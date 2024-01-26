import logicOfGame from '../index.js';
import getRandomNumber from '../expression.js';

const isEven = (num) => num % 2 === 0;

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const initializeRound = () => {
  const number = getRandomNumber(1, 100);
  const question = String(number);
  const systemAnswer = isEven(question) ? 'yes' : 'no';
  return [question, systemAnswer];
};

const startGame = () => {
  logicOfGame(rules, initializeRound);
};
export default startGame;
