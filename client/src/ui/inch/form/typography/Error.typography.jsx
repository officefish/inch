import React from "react"
import Typography from '@material-ui/core/Typography';

const Error = ({message}) => {
    return message
        ? <Typography 
            variant="inherit" 
            color="secondary">
                {message}
            </Typography>
        : <React.Fragment /> 
}
export default Error