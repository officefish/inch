const express = require('express')
const router = express.Router()

const { signupValidator } = require("../middleware/validator/signup.validator")
const { signup } = require("../controllers/signup.controller")
const { signinValidator } = require("../middleware/validator/signin.validator")
const { signin } = require("../controllers/signin.controller")

router.post('/signup', signupValidator, signup)
router.post('/signin', signinValidator, signin)

module.exports = router

