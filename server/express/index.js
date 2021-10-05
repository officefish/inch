const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require("body-parser")

const app = express()

const PORT = process.env.PORT || 3001

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

const db = require('./app/models')
const Role = db.role

const initial = () => {
    Role.create({
        id: 1,
        name: "user"
    })
    Role.create({
        id: 2,
        name: "moderator"
    })
    Role.create({
        id: 3,
        name: "admin"
    })
}

// db.sequelize.authenticate()
//   .then(() => {
//       console.log("Success!")
//   })
//   .catch((err) => {
//       console.log(err)
//   })

db.sequelize.sync({ force: true })
    .then(() => {
        console.log('Drop and Resync Db')
        initial()
    })

app
    .use(express.static(path.join(__dirname + '../../../client/build')))
    .listen(PORT, () => console.log(`Listening on ${PORT}`))

app.get('/', (req, res) => {
    const buildPath = path.join(__dirname + '../../../client/build/index.html')
    console.log(buildPath)
    res.sendFile(buildPath);
})

require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)