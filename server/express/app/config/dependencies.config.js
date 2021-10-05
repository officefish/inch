const _cors = require('cors')
const _bodyParser = require("body-parser")


const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
}

exports.cors = app => {
    app.use(_cors(corsOptions))
}

exports.bodyParser = app => {

    // parse requests of content-type - application/json
    app.use(bodyParser.json())

    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }))
}

