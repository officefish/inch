const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const config = require('../config/auth.config')
const { validator } = require('express-validator');

const db = require('../models')
const User = db.user

const sign = (userId, needRemember) => {
  const day = 86400 // 24 hours
  const expiresIn = needRemember
    ? day * 14 // 14 days session
    : day / 8 // 3 hours session
  return jwt.sign({ id: userId }, config.secret, {
    expiresIn: expiresIn 
  })
}

exports.signin = (req, res) => {
   
    User.findOne({
          where: validator.isEmail(req.body.nickname)
          ? { username: req.body.username }
          : { email: req.body.username}
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
  
        const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        )
  
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          })
        }
  
        const token = sign(user.id, req.body.needRemember || true)
  
        const authorities = []
        user.getRoles().then(roles => {
          roles.map(role => {
              authorities.push("ROLE_" + role.name.toUpperCase())
          })
          // for (let i = 0; i < roles.length; i++) {
          //   authorities.push("ROLE_" + roles[i].name.toUpperCase())
          // }
          res.status(200).send({
            id: user.id,
            username: user.username,
            email: user.email,
            roles: authorities,
            accessToken: token
          })
        })
      })
      .catch(err => {
        res.status(500).send({ message: err.message })
      })
  }