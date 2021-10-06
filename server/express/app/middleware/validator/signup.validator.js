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

const checkDublicateUsername = (req, res, next) => {
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
    })
}

const checkDublicateEmail = (req, res, next) => {
    User.findOne({
        where: {
          email: req.body.email
        }
      }).then(user => {
        if (user) {
          res.status(400).send({
            message: "Failed! Email is already in use!"
          })
          return
        }
        next()
    })
}

const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
      for (let i = 0; i < req.body.roles.length; i++) {
        if (!ROLES.includes(req.body.roles[i])) {
          res.status(400).send({
            message: "Failed! Role does not exist = " + req.body.roles[i]
          })
          return
        }
      }
    }
    next()
}

exports.signupValidator = [
  responseHeader,
  checkUsername,
  checkEmail,
  checkPassword,
  checkDublicateUsername,
  checkDublicateEmail,
  checkRolesExisted,
  responseFirstError,
]
