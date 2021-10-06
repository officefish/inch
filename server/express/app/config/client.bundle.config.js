const express = require('express')
const path = require('path')

module.exports = (app, dirname) => {
    app
    .use(express.static(path.join(dirname + '../../../client/build')))
}