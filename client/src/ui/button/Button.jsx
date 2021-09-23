import PropTypes from "prop-types";
import tw from "tailwind-styled-components"

const StyledButton = tw.button`
   ${(p) => (p.$primary ? "text-secondary-dark" : "text-primary-dark")}
   ${(p) => (p.$primary ? "bg-primary" : "bg-secondary")}
   ${(p) => (p.$primary ? "hover:bg-primary-light" : "hover:bg-secondary-light")}
   p-3 
   rounded-3xl 
   w-full 
   h-full 
   focus:outline-none
    `

const Button = ({ primary, label, onClick, ...props }) => {

    return <StyledButton
            onClick={onClick}
            $primary={primary}
            {...props}>
            {label}
        </StyledButton>
};

Button.propTypes = {
    primary:PropTypes.bool,
    label:PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    primary:true,
};

export default Button;