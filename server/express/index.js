const express = require('express')
const app = express()

/** Setup cors */
require('./app/config/dependencies.cors')(app)

/** Setup body-parser */
require('./app/config/dependencies.body-parser')(app)

/** Initialize postgre sql db */
require('./app/models').initial()

/** Setup app port */
require('./app/config/port.config')(app, 3001)

/** Catch bundle */
require('./app/config/client.bundle.config')(app, __dirname)

/** Routes SPA */
require('./app/config/spa.config')(app,__dirname)

/** Initialize router instance */

/** Auth API */
app.use('/api/auth'   , require('./app/routes/auth.routes'))
//require('./app/routes/auth.routes')(route)

/** User API */
//require('./app/routes/user.routes')(app)
