import PropTypes from "prop-types";
import tw from "tailwind-styled-components";
import ToggleEyeInput from "./ToggleEyeInput";

const StyledDisplay = tw.div`
   ${(p) => (p.$primary ? "bg-secondary-dark" : "bg-primary-dark")}
   mx-12 
   p-3 
   rounded-xl 
   shadow-sm 
    `
const StyledLiner = tw.div`
   ${(p) => (p.$primary ? "border-secondary-light" : "border-primary-light")}
   flex
   p-3 
   mx-6 
   border-b 
    `
const StyledInput = tw.input`
    ${(p) => (p.$primary ? "text-primary" : "text-secondary")}
    ${(p) => (p.$primary ? "placeholder-secondary" : "placeholder-primary")}
    ${(p) => (p.$primary ? "bg-secondary-dark" : "bg-primary-dark")}
    w-full 
    focus:outline-none 
    focus:rang
    `

const HandleOnChange = () => {
    console.log ('handle on change')
}

const LoginInput = ({ primary, type }) => {

    const typeConfig = getTypeConfig(type)

    return  <StyledDisplay $primary={primary}>
        <StyledLiner $primary={primary}>
            <StyledInput $primary={primary} placeholder={typeConfig.placeholder} type={typeConfig.type} />
        </StyledLiner>

        <StyledLiner $primary={primary}>
            <StyledInput $primary={primary} placeholder="Password" type="password" />
            <ToggleEyeInput primary={!primary} checked={false} onChange={HandleOnChange} />
        </StyledLiner>
    </StyledDisplay>
}

export default LoginInput

const getTypeConfig = type => {
    const config = {}
    switch (type) {
        case LoginType.Nickname:
            config.placeholder = 'Nickname'
            config.type = 'text'
            break
        case LoginType.Tel:
            config.placeholder = 'Phone Number'
            config.type = 'tel'
            break
        case LoginType.Email:
            config.placeholder = 'Email address'
            config.type = 'email'
            break
        default:
            config.placeholder = 'not valid type'
            config.type = 'text'
    }
    return config
}

export const LoginType = {
    Nickname:'Nickname',
    Email:'Email',
    Tel:'Tel'
}

LoginInput.propTypes = {
    primary:PropTypes.bool,
    type:PropTypes.oneOf(Object.keys(LoginType)),
};

LoginInput.defaultProps = {
    primary:true,
    type:LoginType.Tel
};