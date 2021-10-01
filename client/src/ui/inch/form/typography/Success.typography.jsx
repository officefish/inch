import React from "react"
import Typography from '@material-ui/core/Typography';

const Success = ({children}) => {
    return children
        ? <Typography 
            variant="inherit" 
            color="primary">
                {children}
            </Typography>
        : <React.Fragment /> 
}
export default Success