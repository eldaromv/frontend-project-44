import runGame from '../index.js';
import getRandomNumber from '../utils.js';

const rules = 'What number is missing in the progression?';

const getProgression = (number, numberAdd, progressionLength) => {
  const progression = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    progression.push(number + numberAdd * i);
  }
  return progression;
};

const initializeRound = () => {
  const progressionLength = 10;
  const startNumber = getRandomNumber(1, 50);
  const increaseInProgression = getRandomNumber(1, 10);
  const rangdomMissingNum = getRandomNumber(0, 10);
  const progression = getProgression(startNumber, increaseInProgression, progressionLength);
  const correctAnswer = progression[rangdomMissingNum];
  progression[rangdomMissingNum] = '..';
  const question = progression.join(' ');

  return [question, String(correctAnswer)];
};

const startGame = () => {
  runGame(rules, initializeRound);
};
export default startGame;
