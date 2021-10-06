const _bodyParser = require("body-parser")

module.exports = app => {

    // parse requests of content-type - application/json
    app.use(_bodyParser.json())

    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(_bodyParser.urlencoded({ extended: true }))
}

