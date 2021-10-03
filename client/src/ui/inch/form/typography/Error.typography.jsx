import React from "react"
import Typography from '@mui/material/Typography'

const Error = ({children}) => {
    return children
        ? <Typography 
            variant="inherit" 
            color="secondary">
                {children}
            </Typography>
        : <React.Fragment /> 
}
export default Error