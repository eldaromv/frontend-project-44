import logicOfGame from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What number is missing in the progression?';

const initializeRound = () => {
  const progression = [];
  const length = 10;
  const startNumber = getRandomNumber(1, 50);
  const increaseInProgression = getRandomNumber(1, 10);
  const rangdomMissingNum = getRandomNumber(0, 10);

  for (let i = 0; i <= length; i += 1) {
    progression.push(startNumber + increaseInProgression * i);
  }
  const correctAnswer = progression[rangdomMissingNum];
  progression[rangdomMissingNum] = '..';
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

const startGame = () => {
  logicOfGame(rules, initializeRound);
};
export default startGame;
