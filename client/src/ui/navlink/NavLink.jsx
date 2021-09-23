import { Link } from "react-router-dom";
import tw from 'tailwind-styled-components'
import PropTypes from "prop-types";

import {FontWeight, TextSize} from "../enums/enums";

export const StyledNavLink = tw(Link)`
    ${(p) => (p.$primary ? "text-primary-dark" : "text-secondary-dark")}
    ${(p) => (p.$textSize)}
    ${(p) => (p.$fontWeight)}
    focus:outline-none
    `

const NavLink = ({primary, fontWeight, textSize, to, children}) => {
    return <StyledNavLink to={to} $primary={primary} $textSize={textSize} $fontWeight={fontWeight}>
        {children}
    </StyledNavLink>
}

export default NavLink

NavLink.propTypes = {
    primary:PropTypes.bool,
    fontWeight:PropTypes.oneOf(Object.values(FontWeight)),
    textSize:PropTypes.oneOf(Object.values(TextSize)),
    to:PropTypes.string,
    children:PropTypes.element
};

NavLink.defaultProps = {
    primary:true,
    fontWeight:FontWeight.NORMAL,
    textSize:TextSize.BASE,
    to:'/'
};