const { validationResult } = require('express-validator')

exports.responseFirstError = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      const error = errors.array()[0].msg
      res.status(422).json({error: error})
      return 
    }
    next()
}