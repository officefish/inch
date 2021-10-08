const chai = require('chai')
const request = require('supertest')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

let should = require('chai').should(),
    expect = require('chai').expect,
    faker = require('faker')

const api = require("../app")(3001)

describe('SPA', function() {
   
    describe('GET /', function() {
        it('Empty slash path should return a 200 response', function(done) {
            api.get(`/`)
                .set('Accept', 'application/x-www-form-urlencoded')
                .expect(200, done)
        })
    })

})