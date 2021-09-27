import { Link } from "react-router-dom";
import tw from 'tailwind-styled-components'
import PropTypes from "prop-types";

import {FontWeight, TextSize, ThemeColor} from "../enums";

export const StyledNavLink = tw(Link)`
    ${(p) => ("text-" + p.$textColor)}
    ${(p) => ("hover:text-" + p.$hoverTextColor)}
    ${(p) => ("bg-" + p.$bgColor)}
    ${(p) => ("hover:bg-" + p.$hoverBgColor)}
    ${(p) => (p.$textSize)}
    ${(p) => (p.$fontWeight)}
    focus:outline-none
    `

const NavLink = ({children, ...props}) => {

    const {
        fontWeight,
        textSize,
        bgColor,
        textColor,
        hoverBgColor,
        hoverTextColor,
        to
    } = props

    return <StyledNavLink to={to} 
        $textSize={textSize} 
        $fontWeight={fontWeight}
        $bgColor={bgColor}
        $hoverBgColor={hoverBgColor}
        $textColor={textColor}
        $hoverTextColor={hoverTextColor}
        >
        {children}
    </StyledNavLink>
}

export default NavLink

NavLink.propTypes = {
    bgColor:PropTypes.oneOf(Object.values(ThemeColor)),
    hoverBgColor:PropTypes.oneOf(Object.values(ThemeColor)),
    textColor:PropTypes.oneOf(Object.values(ThemeColor)),
    hoverTextColor:PropTypes.oneOf(Object.values(ThemeColor)),
    fontWeight:PropTypes.oneOf(Object.values(FontWeight)),
    textSize:PropTypes.oneOf(Object.values(TextSize)),
    to:PropTypes.string,
};

NavLink.defaultProps = {
    fontWeight:FontWeight.NORMAL,
    textSize:TextSize.BASE,
    to:'/'
};