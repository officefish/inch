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
    signup:'Signup',
    signin:'Signin'
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
    signin: {
        noExistUsername:{},
    },
    signup: {
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
    },
    

}

const directories = {
    signup:'/api/auth/signup',
    signin:'/api/auth/signin'
}  

const noValidParamsTests = api => (status, title, directory, params, errorMsg) => {
    const paramsStr = JSON.stringify(params)
    const method = title + '?' + paramsStr
    return () => {
        
        it( method + ' return a ' + status +' status response', function(done) {
            api.post(directory)
                .set('Accept', 'application/json')
                .send(params)
                .expect(status, done())    
        })

        it( method + ' return object with .error property', function(done) {
            api.post(directory)
                .set('Accept', 'application/json')
                .send(params)
                .end((err, res) => {
                    res.should.have.status(status)
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
                    res.should.have.status(status)
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

const inspectSignupAlreadyUseDataInput = api => {
    describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.signup.validRequest), 
        noValidParamsTests(api)(
            400,
            methods.signup, 
            directories.signup, 
            mockParams.signup.validRequest, 
            errorMessages.username.alreadyUse
    ))

    describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.signup.dublicatePassword), 
        noValidParamsTests(api)(
            400,
            methods.signup, 
            directories.signup, 
            mockParams.signup.dublicatePassword, 
            errorMessages.email.alreadyUse
    ))
}

const wait = timeout => {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
          resolve()
        },timeout)
    })
} 

const removeTestUserfromDB = () => {
    User.findOne({
        where: {
            username: mockParams.signup.validRequest.username
        }
    }).then(user => {
        console.log ('destroy test user after ' + timeout + ' ms')
        if (user) user.destroy()
        
    }).catch(err => {
        
    })
}

const inspectSignupResponseIsJSON = api => {
    describe('POST ' + directories.signup, 
        shouldResponseJSONTest(api)(methods.signup, directories.signup)        
    )
}

const inspectSignupNoInputs = api => {
    describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.signup.noExistUsername), 
        noValidParamsTests(api)(
            422,
            methods.signup, 
            directories.signup, 
            mockParams.signup.noExistUsername, 
            errorMessages.username.noExist
    ))
}

const inspectSigninResponseIsJSON = api => {
    describe('POST ' + directories.signin, 
        shouldResponseJSONTest(api)(methods.signin, directories.signin)        
    )
}

const inspectSigninNoInputs = api => {
    describe("POST " + directories.signin + ":" + JSON.stringify(mockParams.signin.noExistUsername), 
        noValidParamsTests(api)(
            422,
            methods.signin, 
            directories.signin, 
            mockParams.signin.noExistUsername, 
            errorMessages.username.noExist
    ))
}

const inspectSignupUsernameInputs = api => {
    describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.signup.tooShortUsername), 
        noValidParamsTests(api)(
            422,
            methods.signup, 
            directories.signup, 
            mockParams.signup.tooShortUsername, 
            errorMessages.username.tooShort
    ))

    describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.signup.tooLongUsername), 
        noValidParamsTests(api)(
            422,
            methods.signup, 
            directories.signup, 
            mockParams.signup.tooLongUsername, 
            errorMessages.username.tooLong
    ))
} 

const inspectSignupEmailInputs = api => {
    describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.signup.noExistEmail), 
        noValidParamsTests(api)(
            422,
            methods.signup, 
            directories.signup, 
            mockParams.signup.noExistEmail, 
            errorMessages.email.noExist
    ))

    describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.signup.notValidEmail), 
        noValidParamsTests(api)(
            422,
            methods.signup, 
            directories.signup, 
            mockParams.signup.notValidEmail, 
            errorMessages.email.notValid
    ))
}

const inspectSignupPasswordInputs = api => {
       
    describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.signup.noExistPassword), 
    noValidParamsTests(api)(
        422,
        methods.signup, 
        directories.signup, 
        mockParams.signup.noExistPassword, 
        errorMessages.password.noExist
    ))

    describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.signup.toShortPassword), 
        noValidParamsTests(api)(
            422,
            methods.signup, 
            directories.signup, 
            mockParams.signup.toShortPassword, 
            errorMessages.password.tooShort
    ))

    describe("POST " + directories.signup + ":" + JSON.stringify(mockParams.signup.toLongPassword), 
        noValidParamsTests(api)(
            422,
            methods.signup, 
            directories.signup, 
            mockParams.signup.toLongPassword, 
            errorMessages.password.tooLong
    ))
}

const inspectSignupCorrectInput = api => {
    it('Signup with valid data should create new user', function(done) {
        api.post(directories.signup)
           .set('Accept', 'application/x-www-form-urlencoded')
           .send(mockParams.signup.validRequest)
           .expect(200)
           .end((err, res) => {
               res.body.should.be.a('object')
               res.body.should.have.property('message')
                    .eql('User was registered successfully!')
               done()
           })
   })
} 

module.exports = api => {
    
    describe('Auth API', () => {

        inspectSignupResponseIsJSON(api)
        inspectSignupNoInputs(api)
        inspectSignupUsernameInputs(api)
        inspectSignupEmailInputs(api)
        inspectSignupPasswordInputs(api)
        inspectSignupCorrectInput(api)    
        inspectSignupAlreadyUseDataInput(api)

        inspectSigninResponseIsJSON(api)
        inspectSigninNoInputs(api)
        //inspectSigninUsernameInputs(api)
        //inspectSigninPasswordInputs(api)
    })

    wait(400).then(() => {
        removeTestUserfromDB()
    })
       
}