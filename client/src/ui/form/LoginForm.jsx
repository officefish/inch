import Button from "../../ui/button/Button";
import LoginInput from "../../ui/input/LoginInput";
import ToggleInput from "../../ui/input/ToggleInput";
import tw from "tailwind-styled-components"
import {DivFlxJstBtw} from "../display/flex";
import PropTypes from "prop-types";
import {DivFlxFllScn} from "./../display/flex";
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
const LoginForm = ({
                        primary,
                        locale,
                        children,
                        nickNamePreview,
                        passwordPreview,
                        needRemember,
                        showPassword,
                        updateNickNamePreview,
                        updatePasswordPreview,
                        toggleNeedRemember,
                        toggleShowPassword
                    }) => {
    return <DivFlxFllScn className='h-full'>
        <StyledDisplay $primary={primary}>
        <StyledHeaderLiner>
            <StyledHeader $primary={primary}>
                {children}
            </StyledHeader>
            <StyledSignature $primary={primary}>
                {locale.signatureMsg}
            </StyledSignature>
        </StyledHeaderLiner>
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
                <NavLink primary={primary} to={'/'} textSize={TextSize.EXTRA_SMALL}>
                    {locale.forgetMsg}
                </NavLink>
            </ForgetLiner>
        </AdditionalLiner>
        <BtnLiner>
            <Button primary={primary} label={locale.loginMsg} />
            <StyledSignupMsg $primary={primary}>{locale.signupSigMsg}
                <NavLink to={'/'} primary={primary} fontWeight={FontWeight.SEMI_BOLD}>
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