import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { NavLink } from "react-router-dom"

const NavButton = props => {
    const {to, color, size, children} = props


    return <NavLink to={to} style={{ textDecoration: 'none'}}>
        <IconButton >
            <Typography variant="button" size={size} sx={{color: {color}}}>
                {children}
            </Typography>
        </IconButton>
    </NavLink>
}
export default NavButton

NavButton.propTypes = {
    color:PropTypes.string,
    size:PropTypes.string,
    to:PropTypes.string
}

NavButton.defaultProps = {
    color: 'white',
    size: 'medium'
  };
