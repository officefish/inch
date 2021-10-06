const path = require('path')

module.exports = (app, port) => {
    const PORT = process.env.PORT || port
    app
    .listen(PORT, () => console.log(`Listening on ${PORT}`))
}