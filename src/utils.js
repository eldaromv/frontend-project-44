const getRandomNumber = (min = 2, max = 35) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

export default getRandomNumber;
