import logicOfGame from '../index.js';
import getRandomNumber from '../expression.js';

const rules = 'What number is missing in the progression?';

const initializeRound = () => {
    const progression = [];
    const length = 10;
    const startNumber = getRandomNumber(1, 50);
    const increaseInProgression = getRandomNumber(1, 10);
    const rangdomMissingNum = getRandomNumber(0, 10);

    for (let i = 0; i <= length; i++) {
        progression.push(startNumber + increaseInProgression * i);
    }
    const systemAnswer = progression[rangdomMissingNum];
    progression[rangdomMissingNum] = '..';
    const question = progression.join(' ');
    return [question, String(systemAnswer)];
  };
  
  const startGame = () => {
      logicOfGame(rules, initializeRound);
  };
  export default startGame;