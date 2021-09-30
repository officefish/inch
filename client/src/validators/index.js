//import { isEmail } from "validator";
import * as Yup from 'yup';

const locale = {
  emailRequired:"Email is required",
  emailInvalid:"Email is invalid",
  passRequired:"Password is required",
  passMin:"Password must be at least 6 characters",
  passMax:"Password must not exceed 40 characters"
}

export const loginValidation = Yup.object().shape({
  email: Yup.string()
      .required(locale.emailRequired)
      .email(locale.emailInvalid),
  password: Yup.string()
      .required(locale.passRequired)
      .min(6, locale.passMin)
      .max(40, locale.passMax)
})