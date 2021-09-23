import PropTypes from "prop-types";
import {DivFlx} from "../display/flex";
import tw from "tailwind-styled-components";

const StyledDisplay = tw.div`
    relative 
    inline-block 
    w-12 
    mr-2 
    align-middle 
    select-none 
    transition 
    duration-200 
    ease-in
    `

const StyledCheckbox = tw.input`
    ${(p) => (p.$primary ? "bg-secondary-dark" : "bg-primary-dark")}
    ${(p) => (p.$primary ? "border-primary" : "border-secondary")}
    ${(p) => (p.checked ? "left-0" : "right-0")}
    border-solid
    border-4
    absolute 
    block 
    w-6 
    h-6 
    rounded-full 
    appearance-none 
    cursor-pointer
    `
const StyledCheckboxLabel = tw.label`
    ${(p) => (p.$primary ? "bg-primary" : "bg-secondary")}
    block 
    overflow-hidden 
    h-6 
    rounded-full 
    cursor-pointer
    `

const StyledToggleLabel = tw.label`
    ${(p) => (p.$primary ? "text-primary-dark" : "text-secondary-dark")}
    mt-1
    text-xs
    `

const ToggleInput = ({primary, checked, onClick, children}) => {
    return <DivFlx >
        <StyledDisplay>
            <StyledCheckbox
                type="checkbox" name="toggle" id="toggle"
                onClick={onClick}
                $primary={primary}
                checked={checked} />
            <StyledCheckboxLabel
                $primary={primary}
                htmlFor="toggle" />
        </StyledDisplay>
        <StyledToggleLabel
            $primary={primary}
            htmlFor="toggle">
            {children}
        </StyledToggleLabel>
    </DivFlx>
}
export default ToggleInput

ToggleInput.propTypes = {
    primary:PropTypes.bool,
    checked:PropTypes.bool,
    children:PropTypes.string,
    onClick:PropTypes.func
};

ToggleInput.defaultProps = {
    primary:true,
    checked:true,
    children:'remember me'
};