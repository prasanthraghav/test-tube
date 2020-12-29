'use strict'

const vm = require('vm')

const compiler = (input) => {
  const script = new vm.Script(input)
  script.createCachedData()
  return script.runInThisContext()
}

module.exports = compiler