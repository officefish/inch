import tw from "tailwind-styled-components"
import PropTypes from "prop-types";

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

const LoginFormHeader = ({children, ...props}) => {

    const {primary} = props
    const {signatureMsg} = props

    return <StyledHeaderLiner>
        <StyledHeader $primary={primary}>
            {children}
        </StyledHeader>
        <StyledSignature $primary={primary}>
            {signatureMsg}
        </StyledSignature>
    </StyledHeaderLiner>
}
export default LoginFormHeader

LoginFormHeader.propTypes = {
    primary:PropTypes.bool,
    signatureMsg:PropTypes.string
}

LoginFormHeader.defaultProps = {
    primary:true
};
