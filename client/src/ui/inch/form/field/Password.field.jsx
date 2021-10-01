
import React from "react"
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Typography from '@material-ui/core/Typography';

const locale = {
    password:"Password"
}

const Password = props => {

    const {
        toggleShowPassword,
        showPassword,
        register,
        errors
    } = props

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    return <React.Fragment>
            <FormControl fullWidth variant="outlined">
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