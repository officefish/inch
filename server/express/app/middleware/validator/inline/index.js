const { body } = require('express-validator')

exports.usernameExist = body('username', 'Username field not found').exists()
exports.usernameValidMin = body('username', 'Username length should contain 6 or more symbols').isLength({ min: 6 })
exports.usernameValidMax = body('username', 'Username length no more than 20 symbols').isLength({ max: 20 })
exports.emailExist = body("email", "Email field not found").exists()
exports.validEmail = body("email", "Not valid email").isEmail()
exports.passwordExist = body("password", "Password field not found").exists()
exports.passworValidMin = body('password', 'Password length should contain 6 or more symbols').isLength({ min: 6 })
exports.passworValidMax = body('password', 'Password length no more than 40 symbols').isLength({ max: 40 })