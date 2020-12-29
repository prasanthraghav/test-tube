'use strict'

const randomNumber = (digits) => {

  let lowerLimit, upperLimit

  switch (digits) {

    case 2:
      lowerLimit = 10
      upperLimit = 99
      break
    case 3:
      lowerLimit = 100
      upperLimit = 999
      break
    case 4:
      lowerLimit = 1000
      upperLimit = 9999
      break
    case 5:
      lowerLimit = 10000
      upperLimit = 99999
      break
    case 6:
      lowerLimit = 100000
      upperLimit = 999999
      break
    case 7:
      lowerLimit = 1000000
      upperLimit = 9999999
      break
    case 8:
      lowerLimit = 10000000
      upperLimit = 99999999
      break
    case 9:
      lowerLimit = 100000000
      upperLimit = 999999999
      break
    default:
      lowerLimit = 1
      upperLimit = 9

  }

  return Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit)

}

module.exports = { randomNumber }
