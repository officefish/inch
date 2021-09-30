import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const LinkRef = React.forwardRef((props, ref) => <div ref={ref}><Link {...props} /></div>)

const NavLink = props => {
    const {to, color, size, children} = props

    return <Button 
    color={color}
    size={size} 
    component={LinkRef} to={to}>
        {children}
    </Button>
}
export default NavLink

NavLink.propTypes = {
    color:PropTypes.string,
    size:PropTypes.string,
    to:PropTypes.string
}

NavLink.defaultProps = {
    color: 'inherit',
    size: 'medium'
  };
