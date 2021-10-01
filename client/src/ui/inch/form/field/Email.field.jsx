import React from "react"
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const locale = {
    email:"Email address"
}

const Email = props => {

    const {
        errors,
        register
    } = props

    return <React.Fragment>
            <TextField
            margin="normal"
            fullWidth
            id="email"
            label={locale.email}
            name="email"
            variant="outlined"
            autoComplete="email"
            autoFocus
            {...register('email')}
            error={errors.email ? true : false}
        />
        <Typography variant="inherit" color="textSecondary">
            {errors.email?.message}
        </Typography>
    </React.Fragment>
}
export default Email