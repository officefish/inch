const { signupValidator } = require("../middleware/validator/signup.validator");
const { signup } = require("../controllers/signup.controller");
const { signinValidator } = require("../middleware/validator/signin.validator")
const { signin } = require("../controllers/signin.controller");

module.exports = (route) => {

  route.route('/api/auth/signup').post(signupValidator, signup)
  route.route('api/auth/signin').post(signinValidator, signin)
}