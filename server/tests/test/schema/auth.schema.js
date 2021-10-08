const chai = require('chai')
const request = require('supertest')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

let should = require('chai').should(),
    expect = require('chai').expect,
    faker = require('faker')

const db = require('../../app/models') 
const User = db.user

const methods = {
    signup:'Signup'
}

const errorMessages = {
    username: {
        noExist: "Username field not found",
        tooShort: "Username length should contain 6 or more symbols",
        tooLong:"Username length should be no more than 20 symbols",
        alreadyUse:"Username is already in use"
    },
    email: {
        noExist:'Email field not found',
        notValid:'Not valid email',
        alreadyUse:"Email is already in use"
    },
    password: {
        noExist:'Password field not found',
        tooShort:'Password length should contain 6 or more symbols',
        tooLong:'Password length should be no more than 40 symbols'
    }
}

const generateRandomKey = prefix => {
    const key1 = Math.random().toString(36).substring(8)
    const key2 = Math.random().toString(36).substring(8)
    return prefix + key1 + key2
}

const userKey = generateRandomKey('u')

const mockValues = {
    tooShort:"abcd",
    tooLong:"abcdefghijklmnopqrstuvwxyz", 
    validUsername:userKey,
    notValidEmail: userKey + "@@gmail.com",
    validEmail: userKey + "@gmail.com",
    validPassword:generateRandomKey('p')  
}

const mockParams = {
    noExistUsername:{},
    tooShortUsername: { 
        username:mockValues.tooShort
    },
    tooLongUsername: { 
        username:mockValues.tooLong
    },
    noExistEmail: {
        username:mockValues.validUsername
    },
    notValidEmail: {
        username:mockValues.validUsername, 
        email:mockValues.notValidEmail
    },
    noExistPassword: {
        username:mockValues.validUsername, 
        email:mockValues.validEmail
    },
    toShortPassword: {
        username:mockValues.validUsername, 
        email:mockValues.validEmail, 
        password:mockValues.tooShort
    },
    toLongPassword: {
        username:mockValues.validUsername, 
        email:mockValues.validEmail, 
        password:mockValues.tooLong + mockValues.tooLong
    },
    validRequest: {
        username:mockValues.validUsername, 
        email:mockValues.validEmail, 
        password:mockValues.validPassword
    },
    dublicatePassword: {
        username:mockValues.validUsername.split("").reverse().join(""), 
        email:mockValues.validEmail, 
        password:mockValues.validPassword
    }

}

const directories = {
    signup:'/api/auth/signup'
}  

const noValidParamsTests = api => (status, title, directory, params, errorMsg) => {
    const paramsStr = JSON.stringify(params)
    const method = title + '?' + paramsStr
    return () => {
        
        it( method + ' return a ' + status +' status response', function(done) {
            api.post(directory)
                .set('Accept', 'application/json')
                .send(params)
                .end((err, res) => {
                    res.should.have.status(status)
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

const shouldResponseJSONTest = api => (method, directory) => {
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

module.exports = api => {
    describe('Auth API', () => {

        describe('POST ' + directories.signup, 
            shouldResponseJSONTest(api)(methods.signup, directories.signup)        
        )
    
        describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.noExistUsername), 
            noValidParamsTests(api)(
                422,
                methods.signup, 
                directories.signup, 
                mockParams.noExistUsername, 
                errorMessages.username.noExist
        ))
    
        describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.tooShortUsername), 
            noValidParamsTests(api)(
                422,
                methods.signup, 
                directories.signup, 
                mockParams.tooShortUsername, 
                errorMessages.username.tooShort
        ))
    
        describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.tooLongUsername), 
            noValidParamsTests(api)(
                422,
                methods.signup, 
                directories.signup, 
                mockParams.tooLongUsername, 
                errorMessages.username.tooLong
        ))
    
        describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.noExistEmail), 
            noValidParamsTests(api)(
                422,
                methods.signup, 
                directories.signup, 
                mockParams.noExistEmail, 
                errorMessages.email.noExist
        ))
    
        describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.notValidEmail), 
            noValidParamsTests(api)(
                422,
                methods.signup, 
                directories.signup, 
                mockParams.notValidEmail, 
                errorMessages.email.notValid
        ))
    
        describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.noExistPassword), 
            noValidParamsTests(api)(
                422,
                methods.signup, 
                directories.signup, 
                mockParams.noExistPassword, 
                errorMessages.password.noExist
        ))
    
        describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.toShortPassword), 
            noValidParamsTests(api)(
                422,
                methods.signup, 
                directories.signup, 
                mockParams.toShortPassword, 
                errorMessages.password.tooShort
        ))
    
        describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.toLongPassword), 
            noValidParamsTests(api)(
                422,
                methods.signup, 
                directories.signup, 
                mockParams.toLongPassword, 
                errorMessages.password.tooLong
        ))

        User.create(mockParams.validRequest)
        .then (user => {

            describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.validRequest), 
                noValidParamsTests(api)(
                    400,
                    methods.signup, 
                    directories.signup, 
                    mockParams.validRequest, 
                    errorMessages.username.alreadyUse
            ))

            describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.dublicatePassword), 
                noValidParamsTests(api)(
                    400,
                    methods.signup, 
                    directories.signup, 
                    mockParams.dublicatePassword, 
                    errorMessages.email.alreadyUse
            ))
            
            user.destroy()
        })

        describe('POST ' + directories.signup + 'valid data', function() {
            it('Signup with valid data should create new user', function(done) {
                api.post(directories.signup)
                    .set('Accept', 'application/x-www-form-urlencoded')
                    .expect(200)
                    .send(mockParams.validRequest)
                    .end((err, res) => {
                        res.body.should.be.a('object')
                        res.body.should.have.property('message')
                            .eql('User was registered successfully!')

                        User.findOne({
                            where: {
                                username: mockParams.validRequest.username
                            }
                        }).then(user => {
                            if (user) {
                                user.destroy()
                                done()
                            } else {
                                done('User not found in db')
                            } 
                        }).catch(err => {
                            done('No correct User object usage')
                            //res.status(500).send({ message: err.message })
                        })
                        
                    })    
            })
        })

       
   
    })
}