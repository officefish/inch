import React from "react"
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const locale = {
    email:"Email address"
}

const Email = props => {

    const {
        errors,
        register,
        autoFocus
    } = props

    return <React.Fragment>
            <TextField
            margin="none"
            fullWidth
            id="email"
            label={locale.email}
            name="email"
            variant="outlined"
            autoComplete="email"
            autoFocus={autoFocus}
            {...register('email')}
            error={errors.email ? true : false}
        />
        <Typography variant="inherit" color="textSecondary">
            {errors.email?.message}
        </Typography>
    </React.Fragment>
}
export default Email

Email.propTypes = {
    errors:PropTypes.object,
    register:PropTypes.func,
    autoFocus:PropTypes.bool
}

Email.defaultProps = {
    autoFocus:false
}
    