import React, { ReactChildren, ReactChild } from 'react'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
    avatar: {
        margin: 1, 
        bgcolor: 'secondary.main',
        width:24,
        height:24
    }
}))

interface AuxProps {
    children: ReactChild | ReactChildren 
}

const Signin = ({children}:AuxProps) => {
    const classes = useStyles();
    return <React.Fragment>
        <Avatar 
            className={classes.avatar}>
            <LockOutlinedIcon fontSize="small" />
        </Avatar>
        <Typography 
        component="h6" 
        variant="h6">
            {children}
        </Typography>
    </React.Fragment>
}
export default Signin