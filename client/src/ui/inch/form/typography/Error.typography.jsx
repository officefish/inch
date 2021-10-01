import React from "react"
import Typography from '@material-ui/core/Typography';

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