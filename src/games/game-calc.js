import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const symbols = ['+', '-', '*'];

const rules = 'What is the result of the expression?';

const answerQuestion = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator is used: '${operator}'!`);
  }
};

const initializeRound = () => {
  const num1 = getRandomNumber(1, 25);
  const num2 = getRandomNumber(1, 25);
  const operator = symbols[getRandomNumber(0, symbols.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = answerQuestion(num1, num2, operator);
  return [question, String(correctAnswer)];
};

const startGame = () => {
  runGame(rules, initializeRound);
};
export default startGame;
