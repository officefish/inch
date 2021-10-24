import React from 'react'

import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import { NavLink } from "react-router-dom"

interface ILink {
    to:string,
    size:string,
    color:string
}

const Link:React.FC<ILink> = ({ children, ...props }) => {
    const {to, color, size} = props

    return <NavLink to={to} style={{ textDecoration: 'none' }}>
        <IconButton>
            <Typography>
                {children}
            </Typography>
        </IconButton>
    </NavLink>
}
export default Link
