const express = require('express')
const chai = require('chai')
const request = require('supertest')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const app = express()


// describe('GET SPA', () => {

//     it('core path should be valid response status', () => {
//         // code for testing the api
//         request(app)
//         .get('/')
//         .expect(201)
//         .then((res) => {
//             expect(res.headers.location).to.be.eql('/')
//             // more validations can be added here as required
//         })
//     })
// })

let should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://localhost:3001'),
    faker = require('faker')


describe('SPA', function() {
   
    describe('GET /', function() {
        it('Empty slash path should return a 200 response', function(done) {
            api.get(`/`)
                .set('Accept', 'application/x-www-form-urlencoded')
                .expect(200, done)
        })
    })

})

describe('Auth API', () => {

    describe('POST /api/auth/signup :no params', function() {
        
        it('Signup with no parameters should return a 422 status response', function(done) {
            api.post(`/api/auth/signup`)
                .set('Accept', 'application/json')
                .end((err, res) => {
                    res.should.have.status(422)
                    res.body.should.be.a('object')
                    res.body.should.have.property('error')
                        .eql('Username field not found')
                    done()
                })    
        })

        it('Signup with no parameters should return json', function(done) {
            api.post(`/api/auth/signup`)
                .set('Accept', 'application/json')
                .end((err, res) => {
                    res.headers["content-type"].should.contains('application/json')
                    done()
                })    
        })

        it("Signup with no parameters should return object with .error property", function(done) {
            api.post(`/api/auth/signup`)
                .set('Accept', 'application/json')
                .end((err, res) => {
                    res.body.should.be.a('object')
                    res.body.should.have.property('error')
                    done()
                })    
        })

        it("Signup with no parameters error should be:'Username field not found' ", function(done) {
            api.post(`/api/auth/signup`)
                .set('Accept', 'application/json')
                .end((err, res) => {
                    res.body.should.be.a('object')
                    res.body.should.have.property('error')
                        .eql('Username field not found')
                    done()
                })    
        })



    })
})