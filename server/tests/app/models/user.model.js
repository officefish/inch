module.exports = (sequilize, Sequilize) => {
    
    const User = sequilize.define('users', {
        username: {
            type:Sequilize.STRING
        },
        email: {
            type:Sequilize.STRING
        },
        password: {
            type:Sequilize.STRING
        }
    })
    return User
}