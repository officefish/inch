import React from "react"

import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const locale = {
    username:"Username"
}

interface IUsername {
    errors:any,
    register:any,
    autoFocus:boolean
}

const Username:React.FC<IUsername> = props => {

    const {
        errors,
        register,
        autoFocus
    } = props

    return <React.Fragment>
            <TextField
            margin="none"
            fullWidth
            id="username"
            label={locale.username}
            name="usename"
            variant="outlined"
            autoComplete="username"
            autoFocus={autoFocus}
            {...register('username')}
            error={errors.username ? true : false}
        />
        <Typography variant="inherit" color="textSecondary">
            {errors.username?.message}
        </Typography>
    </React.Fragment>
}
export default Username
