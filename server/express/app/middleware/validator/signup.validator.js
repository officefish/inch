const db = require('../../models')

const ROLES = db.ROLES
const User = db.user

const { body, validationResult } = require('express-validator')

const { responseHeader } = require('../sanitizer/responseHeader')

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
  body('username', 'Username field not found').exists(),
  body('username', 'Username length should contain 6 or more symbols').isLength({ min: 6 }),
  body('username', 'Username length no more than 20 symbols').isLength({ max: 20 }),
  body("email", "Email field not found").exists(),
  body("email", "Not valid email").isEmail(),
  body("password", "Password field not found").exists(),
  body('password', 'Password length should contain 6 or more symbols').isLength({ min: 6 }),
  body('password', 'Password length no more than 40 symbols').isLength({ max: 40 }),
  checkDublicateUsername,
  checkDublicateEmail,
  checkRolesExisted,
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({error: errors.array()[0].msg})
    next()
  },
]
