const Validator = require("validator");
const isEmpty = require("./is-empty");

const {
  password: passwordRegex,
  repeat_password: repeat_passwordRegex,
  min: minLength,
  minPassword: minPasswordLength,
  max: maxLength,
} = require("./constants");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.first_name = !isEmpty(data.first_name) ? data.first_name : "";
  data.last_name = !isEmpty(data.last_name) ? data.last_name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.dob = !isEmpty(data.dob) ? data.dob : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";

  if (Validator.isEmpty(data.first_name)) {
    errors.first_name = "please enter your first name*";
  }

  if (Validator.isEmpty(data.last_name)) {
    errors.last_name = "please enter your last name*";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "please enter your email*";
  }
  else if (!Validator.isEmail(data.email)) {
    errors.email = "please enter a valid email*";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "please enter your password*";
  } else if (!data.password.match(passwordRegex)) {
    errors.password = "please enter a valid password of atleast 8 character Ex. atleast one numeric, uppercase and special character *";
  }
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "please enter your phone no.*";
  }
  
  if (Validator.isEmpty(data.dob)) {
    errors.dob = "please enter your Date Of Birth.*";
  }
  
  if (Validator.isEmpty(data.gender)) {
    errors.gender = "please enter your gender";
  }
  
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
