import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import NavLink from "../link/NavLink"


const useStyles = makeStyles(theme => ({
    container: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: 1, 
        bgcolor: 'secondary.main'
    },
    form: {
        marginTop: 1,
        width: '20rem',
    },
    button: {
        marginTop: 3,
        marginBottom: 2
    }
}))

const locale = {
    signin:"Sign in",
    needRemember:"Remember me",
    email:"Email address",
    password:"Password"
}

const LoginForm = (props) => {

    const [values, setValues] = useState({
        password: '',
        showPassword: false,
        needRemember:true
        
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleNeedRemember = () => {
        setValues({
          ...values,
          needRemember: !values.needRemember,
        });
    };

    const {handleSubmit} = props

    const classes = useStyles();

    return (
        <Box 
        className={classes.container}    
        >
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
                {locale.signin}
            </Typography>
            <Box 
            component="form" 
            onSubmit={handleSubmit} 
            className={classes.form}>
            <Grid container direction={"column"} spacing={2}>
                <Grid item>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label={locale.email}
                        name="email"
                        variant="outlined"
                        autoComplete="email"
                        autoFocus
                    />
                </Grid>
                <Grid item>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword 
                                ? <Visibility /> 
                                : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label={locale.password}
                        />
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControlLabel
                    control={<Checkbox 
                        checked={values.needRemember}
                        onChange={handleNeedRemember}
                        color="primary" />}
                    label={locale.needRemember}
                />
                </Grid>
                <Grid item>
                    <Button
                        type="submit"
                        fullWidth
                        color="primary"
                        variant="contained"
                        className={classes.button}>
                        {locale.signin}
                    </Button>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item xs>
                            <NavLink 
                            size="small" 
                            color='default'
                            to="/" >
                                Forgot password?
                            </NavLink>
                        </Grid>
                        <Grid item xs>
                            <NavLink 
                            size="small" 
                            color='default'
                            to="/signup" >
                                {"No account? Sign Up"}
                            </NavLink>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </Box>
    )
}
export default LoginForm