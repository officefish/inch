import React, { ReactChildren, ReactChild } from 'react'
import Typography from '@mui/material/Typography'

interface AuxProps {
    children: ReactChild | ReactChildren
}
const Error = ({children}: AuxProps) => {
    return children
        ? <Typography 
            variant="inherit" 
            color="secondary">
                {children}
            </Typography>
        : <React.Fragment /> 
}
export default Error