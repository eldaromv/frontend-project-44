import logicOfGame from '../index.js';
import getRandomNumber from '../expression.js';

const rules = 'Find the greatest common divisor of given numbers.';

const NOD = (x, y) => {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}

const initializeRound = () => {
    const act1 = getRandomNumber(1, 100);
    const act2 = getRandomNumber(1, 100);
    const question = `${act1} ${act2}`;
    const systemAnswer = NOD(act1, act2);
    return [question, String(systemAnswer)];
  };
  
  const startGame = () => {
      logicOfGame(rules, initializeRound);
  };
  export default startGame;