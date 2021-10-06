const express = require('express')
const app = express()

/** Setup cors */
require('./app/config/dependencies.config/cors')(app)

/** Setup body-parser */
require('./app/config/dependencies.config/bodyParser')(app)

/** Initialize postgre sql db */
require('./app/models').initial()

/** Setup app port */
require('./app/config/port.config')(app, 3001)

/** Setup bundle */
require('./app/config/client.bundle.config')(app, __dirname)

/** Setup SPA */
require('./app/config/spa.config')(app,__dirname)

/** Initialize router instance */
const route = express.Router()

/** Auth API */
require('./app/routes/auth.routes')(route)

/** User API */
//require('./app/routes/user.routes')(app)
