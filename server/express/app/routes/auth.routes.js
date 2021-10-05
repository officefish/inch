const { verifySignUp } = require("../middleware")
const { signin } = require("../controllers/signin.controller")
const { signup } = require("../controllers/signup.controller")

const { body } = require('express-validator')

module.exports = (app) => {
    app.use((req, res, next) => {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      )
      next()
    })
  
    app.post(
      "/api/auth/signup",
        body('username', 'Username field not found').exists(),
        body('username', 'Username length should contain 6 or more symbols').isLength({ min: 6 }),
        body('username', 'Username length no more than 20 symbols').isLength({ max: 20 }),
        body("email", "Email field not found").exists(),
        body("email", "Not valid email").isEmail(),
        body("password", "Password field not found").exists(),
        body('password', 'Password length should contain 6 or more symbols').isLength({ min: 6 }),
        body('password', 'Password length no more than 40 symbols').isLength({ max: 40 }),
      signup
    )
  
    app.post(
      "/api/auth/signin", 
    signin)
}