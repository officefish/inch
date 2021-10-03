
import React from "react"

import OutlinedInput from '@mui/material/OutlinedInput'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const locale = {
    password:"Password"
}

const Password = props => {

    const {
        toggleShowPassword,
        showPassword,
        register,
        errors,
    } = props

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    return <React.Fragment>
            <FormControl margin="none" fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">{locale.password}</InputLabel>
                <OutlinedInput
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {showPassword 
                        ? <Visibility /> 
                        : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
                }
                label={locale.password}
                {...register('password')}
                error={errors.password ? true : false}
                />
        </FormControl>
        <Typography variant="inherit" color="textSecondary">
            {errors.password?.message}
        </Typography>   
    </React.Fragment>
}
export default Password