import React from "react"
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    avatar: {
        margin: 1, 
        bgcolor: 'secondary.main'
    }
}))

const Signin = ({children}) => {
    const classes = useStyles();
    return <React.Fragment>
        <Avatar 
        size='small'
        className={classes.avatar}>
            <LockOutlinedIcon
            size='small'
            />
        </Avatar>
        <Typography 
        component="h6" 
        variant="h6">
            {children}
        </Typography>
    </React.Fragment>
}
export default Signin