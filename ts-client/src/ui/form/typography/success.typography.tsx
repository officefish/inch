import React, { ReactChildren, ReactChild } from 'react'
import Typography from '@mui/material/Typography'

interface AuxProps {
    children: ReactChild | ReactChildren
}
const Success = ({children}:AuxProps) => {
    return children
        ? <Typography 
            variant="inherit" 
            color="primary">
                {children}
            </Typography>
        : <React.Fragment /> 
}
export default Success