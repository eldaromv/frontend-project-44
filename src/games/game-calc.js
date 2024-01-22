import logicOfGame from '../index.js';
import getRandomNumber from '../expression.js';

const symbols = ['+', '-', '*']

const rules = 'What is the result of the expression?';

const answerQuestion = (act1, act2, action) => {
  switch (action) {
    case '+':
      return act1 + act2;
    case '-':
      return act1 - act2;
    case '*':
      return act1 * act2;
    default:
      throw new Error('No such action');
  }
};

const initializeRound = () => {
  const act1 = getRandomNumber(1, 25);
  const act2 = getRandomNumber(1, 25);
  const action = symbols[getRandomNumber(0, symbols.length - 1)]
  const question = `${act1} ${action} ${act2}`;
  const systemAnswer = answerQuestion(act1, act2, action);
  return [question, String(systemAnswer)];
};

const startGame = () => {
    logicOfGame(rules, initializeRound);
};
export default startGame;
