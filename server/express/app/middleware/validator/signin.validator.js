
const { responseHeader } = require('../sanitizer/responseHeader')
const { responseFirstError } = require('../sanitizer/responseFirstError')

const {
    checkPassword,
    checkUsernameOrEmail
  } = require('./checks')

exports.signinValidator = [
    responseHeader,
    checkUsernameOrEmail,    
    checkPassword,
    responseFirstError,
]