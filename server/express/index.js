const express = require('express')
const path = require('path')
const route = express.Router()

const app = express()

const PORT = process.env.PORT || 3001

/** Setup cors */
require('./app/config/dependencies.config/cors')(app)

/** Setup body-parser */
require('./app/config/dependencies.config/bodyParser')(app)

const db = require('./app/models')
db.initial()

app
    .use(express.static(path.join(__dirname + '../../../client/build')))
    .listen(PORT, () => console.log(`Listening on ${PORT}`))

app.get('/', (req, res) => {
    const buildPath = path.join(__dirname + '../../../client/build/index.html')
    console.log(buildPath)
    res.sendFile(buildPath);
})

/** Auth API */
require('./app/routes/auth.routes')(route)

/** User API */
//require('./app/routes/user.routes')(app)
