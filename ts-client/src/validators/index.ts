import * as Yup from 'yup'

const locale = {
    emailRequired: "Email is required",
    emailInvalid: "Email is invalid",
    passRequired: "Password is required",
    passMin: "Password must be at least 6 characters",
    passMax: "Password must not exceed 40 characters",
    usernameRequired: "Username is required",
    usernameOrEmailRequired: "Username or email is required",
    usernameMin: 'Username must be at least 6 characters',
    usernameMax: 'Username must not exceed 20 characters',
    confirmPassRequired: 'Confirm Password is required',
    confirmNotValid: "Confirm Password does not match"
}

export const loginValidation = Yup.object().shape({
    username: Yup.string()
        .required(locale.usernameOrEmailRequired)
        .min(6, locale.usernameMin)
        .max(20, locale.usernameMax),
    password: Yup.string()
        .required(locale.passRequired)
        .min(6, locale.passMin)
        .max(40, locale.passMax)
})

export const registerValidation = Yup.object().shape({
    username: Yup.string()
        .required(locale.usernameRequired)
        .min(6, locale.usernameMin)
        .max(20, locale.usernameMax),
    email: Yup.string()
        .required(locale.emailRequired)
        .email(locale.emailInvalid),
    password: Yup.string()
        .required(locale.passRequired)
        .min(6, locale.passMin)
        .max(40, locale.passMax),
    confirmPassword: Yup.string()
        .required(locale.confirmPassRequired)
        .oneOf([Yup.ref('password'), null], locale.confirmNotValid),
})