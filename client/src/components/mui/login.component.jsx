import PropTypes from 'prop-types';
import LoginForm from '../../ui/inch/form/LoginForm'

import { Redirect } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginValidation } from '../../validators';

import { connect } from "react-redux";
import { login } from "../../actions/auth";

import { useState } from 'react'

const Login = props => {

    const { 
        dispatch, 
        history,
        isLoggedIn,
        message 
    } = props;

    const [loading, setLoading] = useState(false)
    
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(loginValidation)
      });

    const onSubmit = data => {
        setLoading(true)
        const {email, password} = data
        dispatch(login(email, password))
            .then(() => {
                history.push("/profile");
                window.location.reload();
            })
            .catch(() => {
                setLoading(false)
            });
    }

    return isLoggedIn
    ? <Redirect to="/profile" />
    : <LoginForm
        register={register}
        errors={errors}
        message={message}
        handleSubmit={handleSubmit(onSubmit)}
        loading={loading}
    />
}

const mapStateToProps = state => {
    const { isLoggedIn } = state.auth;
    const { message } = state.message;
    return {
      isLoggedIn,
      message
    };
  }

export default connect(mapStateToProps)(Login)

LoginForm.propTypes = {
    isLoggedIn:PropTypes.bool.isRequired,
    message:PropTypes.string,
    dispatch:PropTypes.func.isRequired,
    history:PropTypes.array.isRequired
}