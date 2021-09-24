import Button from "../../button/Button";
import LoginInput from "../../input/LoginInput";
import ToggleInput from "../../input/ToggleInput";
import tw from "tailwind-styled-components"
import {DivFlxJstBtw} from "../../display/flex" 
import PropTypes from "prop-types";
import {DivFlxFllScn} from "../../display/flex";
import NavLink from "../../navlink/NavLink";
import {FontWeight, TextSize} from "../../enums/enums";
import LoginFormHeader from "./LoginFormHeader";

const StyledDisplay = tw.div`
    ${(p) => (p.$primary ? "bg-secondary" : "bg-primary")}
    mx-auto
    h-screen
    msx-w-md
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
const LoginForm = ({children, ...props}) => {

    const {primary} = props
    const {locale} = props
    const {signupPath} = props
    const {forgetPassPath} = props
    const {nickNamePreview} = props
    const {passwordPreview} = props
    const {needRemember} = props
    const {showPassword} = props
    const {updateNickNamePreview} = props
    const {updatePasswordPreview} = props
    const {toggleNeedRemember} = props
    const {toggleShowPassword} = props
    

    return <DivFlxFllScn className='h-full'>
        <StyledDisplay $primary={primary}>
            <LoginFormHeader 
                primary={primary}
                signatureMsg={locale.signatureMsg}>
                {children}
            </LoginFormHeader>
            <LoginInput primary={primary}
                        showPassword={showPassword}
                        toggleShowPassword={toggleShowPassword}
                        nickNamePreview={nickNamePreview}
                        updateNickNamePreview={updateNickNamePreview}
                        passwordPreview={passwordPreview}
                        updatePasswordPreview={updatePasswordPreview}
            />
            <AdditionalLiner>
                <ToggleInput primary={primary}
                            checked={needRemember}
                            onClick={ () => {toggleNeedRemember(needRemember)} }
                />
                <ForgetLiner $primary={primary}>
                    <NavLink primary={primary} to={forgetPassPath} textSize={TextSize.EXTRA_SMALL}>
                        {locale.forgetMsg}
                    </NavLink>
                </ForgetLiner>
            </AdditionalLiner>
            <BtnLiner>
                <Button primary={primary} label={locale.loginMsg} />
                <StyledSignupMsg $primary={primary}>{locale.signupSigMsg}
                    <NavLink to={signupPath} primary={primary} fontWeight={FontWeight.SEMI_BOLD}>
                        {locale.signupMsg}
                    </NavLink>
                </StyledSignupMsg>
            </BtnLiner>
        </StyledDisplay>
    </DivFlxFllScn>
}

export default LoginForm

LoginForm.propTypes = {
    primary:PropTypes.bool,
    locale:PropTypes.object,
    signupPath:PropTypes.string.isRequired,
    forgetPassPath:PropTypes.string.isRequired,
    nickNamePreview: PropTypes.string.isRequired,
    passwordPreview: PropTypes.string.isRequired,
    needRemember: PropTypes.bool.isRequired,
    showPassword: PropTypes.bool.isRequired,
    updateNickNamePreview: PropTypes.func.isRequired,
    updatePasswordPreview: PropTypes.func.isRequired,
    toggleNeedRemember:PropTypes.func.isRequired,
    toggleShowPassword:PropTypes.func.isRequired
};

const defaultLocale = {
    signupPath:"/",
    forgetPassPath:"/",
    signatureMsg:"Sign in to continue",
    forgetMsg:"forget password?",
    signupSigMsg:"don't have an account? ",
    signupMsg:"Sign up",
    loginMsg:"Login"
}

LoginForm.defaultProps = {
    primary:true,
    locale:defaultLocale
};