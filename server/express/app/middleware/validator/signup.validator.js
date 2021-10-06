const db = require('../../models')

const ROLES = db.ROLES
const User = db.user

const { responseHeader } = require('../sanitizer/responseHeader')
const { responseFirstError } = require('../sanitizer/responseFirstError')

const {
  checkUsername,
  checkEmail,
  checkPassword
} = require('./checks')

checkDublicateUsername = (req, res, next) => {
    User.findOne({
        where: {
          username: req.body.username
        }
    }).then(user => {
        if (user) {
          res.status(400).send({
            message: "Failed! Username is already in use!"
          })
          return
        }
        next()
    }).catch(err => {
      res.status(500).send({ message: err.message })
  })
}

const checkDublicateEmail = (req, res, next) => {
    User.findOne({
        where: {
          email: req.body.email
        }
    }).then(user => {
        if (user) {
          return res.status(400).send({
            message: "Failed! Email is already in use!"
          })
          
        }
        next()
    }).catch(err => {
      res.status(500).send({ message: err.message })
    })
}


exports.signupValidator = [
  responseHeader,
  checkUsername,
  checkEmail,
  checkPassword,
  responseFirstError,
  checkDublicateUsername,
  checkDublicateEmail,
]
