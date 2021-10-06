const path = require('path')

module.exports = (app, dirname) => {
    
    app.get('/', (req, res) => {
        const buildPath = path.join(dirname + '../../../client/build/index.html')
        console.log(buildPath)
        res.sendFile(buildPath);
    })
}