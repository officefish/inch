import Button from "../../ui/button/Button";
import LoginInput from "../../ui/input/LoginInput";
import ToggleInput from "../../ui/input/ToggleInput";
import tw from "tailwind-styled-components"
import {DivFlxJstBtw} from "../display/flex";
import PropTypes from "prop-types";
import {DivFlxFllScrn} from "../../components/styled/display/display";
import NavLink from "../navlink/NavLink";
import {FontWeight, TextSize} from "../enums/enums";

const StyledDisplay = tw.div`
    ${(p) => (p.$primary ? "bg-secondary" : "bg-primary")}
    mx-auto
    h-screen
    msx-w-md
    `
const StyledHeaderLiner = tw.div`
    p-12
    `

const StyledHeader = tw.p`
    ${(p) => (p.$primary ? "text-primary-dark" : "text-secondary-dark")}
    text-5xl 
    pt-10 text-primary-dark 
    font-bold
    `

const StyledSignature = tw.p`
    ${(p) => (p.$primary ? "text-primary-dark" : "text-secondary-dark")}
    text-xl 
    py-3 
    font-semibold
    `

const AdditionalLiner = tw(DivFlxJstBtw)`
    mx-12 
    p-3
    `

const ForgetLiner = tw.div`
    ${(p) => (p.$primary ? "text-primary-dark" : "text-secondary-dark")}
    bg 
    mt-1 
    text-xs 
    `

const BtnLiner = tw.div`
    w-full 
    p-12
    `
const StyledSignupMsg = tw.p`
    ${(p) => (p.$primary ? "text-primary-dark" : "text-secondary-dark")}
    mx-auto 
    text-center 
    mt-3 
    `
const StyledSignupLink = tw.a`
    text-md 
    font-semibold
    `

const HandleNeedRemember = () => {
    console.log ('handle need remember')
}

const LoginForm = ({primary, loginMsg, signatureMsg, forgetMsg, signupMsg, signupSigMsg, children}) => {
    return <DivFlxFllScrn className='h-full'>
        <StyledDisplay $primary={primary}>
        <StyledHeaderLiner>
            <StyledHeader $primary={primary}>
                {children}
            </StyledHeader>
            <StyledSignature $primary={primary}>
                {signatureMsg}
            </StyledSignature>
        </StyledHeaderLiner>
        <LoginInput primary={primary} />
        <AdditionalLiner>
            <ToggleInput primary={primary} onChange={HandleNeedRemember} />
            <ForgetLiner $primary={primary}>
                <NavLink primary={primary} to={'/'} textSize={TextSize.EXTRA_SMALL}>
                    {forgetMsg}
                </NavLink>
            </ForgetLiner>
        </AdditionalLiner>
        <BtnLiner>
            <Button primary={primary} label={loginMsg} />
            <StyledSignupMsg $primary={primary}>{signupSigMsg}
                <NavLink to={'/'} primary={primary} fontWeight={FontWeight.SEMI_BOLD}>
                    {signupMsg}
                </NavLink>
            </StyledSignupMsg>
        </BtnLiner>
        </StyledDisplay>
    </DivFlxFllScrn>
}

export default LoginForm

LoginForm.propTypes = {
    primary:PropTypes.bool,
    signatureMsg:PropTypes.string,
    forgetMsg:PropTypes.string,
    loginMsg:PropTypes.string,
    signupMsg:PropTypes.string,
    signupSigMsg:PropTypes.string
};

LoginForm.defaultProps = {
    primary:true,
    signatureMsg:"Sign in to continue",
    forgetMsg:"forget password?",
    signupSigMsg:"don't have an account? ",
    signupMsg:"Sign up",
    loginMsg:"Login"
};