'use strict'

const randomNumber = (digits) => {

  if (digits < 1) {
    digits = 1;
  }

  const n = Math.round(digits);

  const lowerLimit = Math.pow(10, (n - 1));
  const upperLimit = Math.pow(10, n) - 1;

  return Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit)

}

module.exports = { randomNumber }
