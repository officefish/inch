import './styles/tailwind.css';
//import './styles/font-awesome.min.css';

import React from "react";
import {DivFlxFllScrn} from "./components/styled/display/display";

import { useEffect } from "react";
import { applyTheme } from "./themes/utils";
import baseTheme from "./themes/base";
import darkTheme from "./themes/dark";
import LoginForm from "./ui/form/LoginForm";

const App = () => {

    useEffect(() => {
        applyTheme(baseTheme);
    }, []);

    const baseClickHandle = () => {
        applyTheme(baseTheme)
    }

    const darkClickHandle = () => {
        applyTheme(darkTheme)
    }

    const SignatureMsg = "Sign in to continue"
    const ForgetMsg = "forget password?"
    const SignupSigMsg = "don't have an account? "
    const SignupMsg = "Sign up"
    const LoginMsg = "Login"

    return <LoginForm
            signatureMsg={SignatureMsg}
            forgetMsg={ForgetMsg}
            signupMsg={SignupMsg}
            signupSigMsg={SignupSigMsg}
            loginMsg={LoginMsg}
        >Welcome <br/> Back
        </LoginForm>

}
export default App;


