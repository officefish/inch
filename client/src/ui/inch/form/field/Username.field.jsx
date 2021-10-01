import React from "react"
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const locale = {
    username:"Username"
}

const Username = props => {

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

Username.propTypes = {
    errors:PropTypes.object,
    register:PropTypes.func,
    autoFocus:PropTypes.bool
}

Username.defaultProps = {
    autoFocus:false
}
    