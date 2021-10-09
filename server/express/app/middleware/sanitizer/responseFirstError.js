const { validationResult } = require('express-validator')

exports.responseFirstError = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      errors.array().map((error)=>{console.log(error)})
      
      let error = errors.array()[0]
      error = error.nestedErrors !== undefined && error.nestedErrors.length
        ? error.nestedErrors[0].msg
        : errors.array()[0].msg

      res.status(422).json({error: error})
      return 
    }
    next()
}