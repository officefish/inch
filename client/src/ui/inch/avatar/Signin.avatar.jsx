import React from "react"
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { makeStyles } from '@mui/styles'

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