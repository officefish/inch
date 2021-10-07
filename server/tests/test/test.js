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

const methods = {
    signup:'Signup'
}

const errorMessages = {
    username: {
        noExist: "Username field not found",
        tooShort: "Username length should contain 6 or more symbols",
        tooLong:"Username length should be no more than 20 symbols"
    },
    email: {
        noExist:'Email field not found',
        notValid:'Not valid email'
    },
    password: {
        noExist:'Password field not found',
        tooShort:'Password length should contain 6 or more symbols',
        tooLong:'Password length should be no more than 40 symbols'
    }
}

const mockValues = {
    tooShort:"abcd",
    tooLong:"abcdefghijklmnopqrstuvwxyz", 
    validUsername:"techies",
    notValidEmail:"techies@@gmail.com",
    validEmail:"techies@gmail.com"  
}

const mockParams = {
    noExistUsername:{},
    tooShortUsername:{username:mockValues.tooShort},
    tooLongUsername:{username:mockValues.tooLong},
    noExistEmail:{username:mockValues.validUsername},
    notValidEmail:{username:mockValues.validUsername, email:mockValues.notValidEmail},
    noExistPassword:{username:mockValues.validUsername, email:mockValues.validEmail}
}

const directories = {
    signup:'/api/auth/signup'
}

describe('SPA', function() {
   
    describe('GET /', function() {
        it('Empty slash path should return a 200 response', function(done) {
            api.get(`/`)
                .set('Accept', 'application/x-www-form-urlencoded')
                .expect(200, done)
        })
    })

})

const noValidParamsTests = (title, directory, params, errorMsg) => {
    const paramsStr = JSON.stringify(params)
    const method = title + '?' + paramsStr
    return () => {
        
        it( method + ' return a 422 status response', function(done) {
            api.post(directory)
                .set('Accept', 'application/json')
                .send(params)
                .end((err, res) => {
                    res.should.have.status(422)
                    done()
                })    
        })

        it( method + ' return object with .error property', function(done) {
            api.post(directory)
                .set('Accept', 'application/json')
                .send(params)
                .end((err, res) => {
                    res.body.should.be.a('object')
                    res.body.should.have.property('error')
                    done()
                })    
        })

        it( method + ' error is: ' + errorMsg, function(done) {
            api.post(directory)
                .set('Accept', 'application/json')
                .send(params)
                .end((err, res) => {
                    res.body.should.be.a('object')
                    res.body.should.have.property('error')
                        .eql(errorMsg)
                    done()
                })    
        })

    }
}

const shouldResponseJSONTest = (method, directory) => {
    return () => {
        it(method + ' should return json', function(done) {
            api.post(directory)
                .set('Accept', 'application/json')
                .end((err, res) => {
                    res.headers["content-type"].should.contains('application/json')
                    done()
                })    
        })
    }
}

describe('Auth API', () => {

    describe('POST ' + directories.signup, 
        shouldResponseJSONTest(methods.signup, directories.signup)        
    )

    describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.noExistUsername), 
        noValidParamsTests(
            methods.signup, 
            directories.signup, 
            mockParams.noExistUsername, 
            errorMessages.username.noExist
    ))

    describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.tooShortUsername), 
        noValidParamsTests(
            methods.signup, 
            directories.signup, 
            mockParams.tooShortUsername, 
            errorMessages.username.tooShort
    ))

    describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.tooLongUsername), 
        noValidParamsTests(
            methods.signup, 
            directories.signup, 
            mockParams.tooLongUsername, 
            errorMessages.username.tooLong
    ))

    describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.noExistEmail), 
        noValidParamsTests(
            methods.signup, 
            directories.signup, 
            mockParams.noExistEmail, 
            errorMessages.email.noExist
    ))

    describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.notValidEmail), 
        noValidParamsTests(
            methods.signup, 
            directories.signup, 
            mockParams.notValidEmail, 
            errorMessages.email.notValid
    ))


})