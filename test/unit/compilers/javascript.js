'use strict'

const { strictEqual } = require('assert')
const { jsCompiler } = require('../../../src/compilers')
const { randomNumber } = require('../../helper')

describe('Javascript compiler', () => {  

  it('should compile an add function with single digit numbers', () => {
    
    const randomNumA = randomNumber(1)
    const randomNumB = randomNumber(1)

    const jsInput = `
      const add = (a, b) => {
        return a + b
      }
      add(${randomNumA}, ${randomNumB})
    `
    const compiledOutput = jsCompiler(jsInput)
    
    strictEqual(compiledOutput, (randomNumA + randomNumB))

  })

  it('should compile an add function with 8 digit numbers', () => {
    
    const randomNumA = randomNumber(8)
    const randomNumB = randomNumber(8)

    const jsInput = `
      const addA = (a, b) => {
        return a + b
      }
      addA(${randomNumA}, ${randomNumB})
    `
    const compiledOutput = jsCompiler(jsInput)
    
    strictEqual(compiledOutput, (randomNumA + randomNumB))

  })

  it('should compile a multiplication function with single digit number', () => {
    const randomNumA = randomNumber(1)
    const randomNumB = randomNumber(1)

    const jsInput = `
      const multiply = (a, b) => {
        return a * b
      }
      multiply(${randomNumA}, ${randomNumB})
    `
    const compiledOutput = jsCompiler(jsInput)
    
    strictEqual(compiledOutput, (randomNumA * randomNumB))
  })

  it('should compile a multiplication function with 6 digit number', () => {
    const randomNumA = randomNumber(6)
    const randomNumB = randomNumber(6)

    const jsInput = `
      const multiplyA = (a, b) => {
        return a * b
      }
      multiplyA(${randomNumA}, ${randomNumB})
    `
    const compiledOutput = jsCompiler(jsInput)
    
    strictEqual(compiledOutput, (randomNumA * randomNumB))
  })

})