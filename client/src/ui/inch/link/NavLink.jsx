import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import { NavLink } from "react-router-dom"

const Link = props => {
    const {to, color, size, children} = props

    return <NavLink to={to} style={{ textDecoration: 'none' }}>
        <IconButton>
            <Typography>
                {children}
            </Typography>
        </IconButton>
    </NavLink>
}
export default Link

NavLink.propTypes = {
    color:PropTypes.string,
    size:PropTypes.string,
    to:PropTypes.string
}

NavLink.defaultProps = {
    color: 'inherit',
    size: 'medium'
  };
