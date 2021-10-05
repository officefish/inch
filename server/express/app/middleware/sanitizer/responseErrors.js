const { validationResult } = require('express-validator')

exports.responseErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({error: errors.array()})
    next()
}