
/** Initialize postgre sql db */
require('./models').sync()

const supertest = require('supertest')

module.exports = (port) => { return supertest('http://localhost:' + port) }