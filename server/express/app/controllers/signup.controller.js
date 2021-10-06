const bcrypt = require('bcryptjs')

const db = require('../models')
const User = db.user

exports.signup = (req, res) => {

    // Save User to Database
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    .then (user => {
        // user role = 1
        user.setRoles([1]).then(() => {
            res.send({ message: "User was registered successfully!" })
        })
        
    })
    .catch(err => {
        res.status(500).send({ message: err.message })
    })
}
