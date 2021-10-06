const { check, oneOf } = require('express-validator')

exports.checkUsername = check('username')
    .exists()
    .withMessage('Username field not found')
    .isLength({ min: 6 })
    .withMessage('Username length should contain 6 or more symbols')
    .isLength({ max: 20 })
    .withMessage('Username length should be no more than 20 symbols')

exports.checkEmail = check('email')
    .exists()
    .withMessage('Email field not found')
    .isEmail()
    .withMessage('Not valid email')

exports.checkPassword = check('password')
    .exists()
    .withMessage('Password field not found')
    .isLength({ min: 6 })
    .withMessage('Password length should contain 6 or more symbols')
    .isLength({ max: 40 })
    .withMessage('Password length should be no more than 40 symbols')

exports.checkUsernameOrEmail = oneOf([
    
    check('username')
        .exists()
        .withMessage('Username field not found')
        .isLength({ min: 6 })
        .withMessage('Username length should contain 6 or more symbols')
        .isLength({ max: 20 })
        .withMessage('Username length should be no more than 20 symbols'),

    check('username')
        .exists()
        .withMessage('Username field not found')
        .isEmail()
        .withMessage('Email field not found')
])