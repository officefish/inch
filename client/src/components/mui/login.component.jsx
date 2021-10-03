import PropTypes from 'prop-types';
import LoginForm from '../../ui/inch/form/LoginForm'

import { Redirect } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginValidation } from '../../validators';

import { connect } from "react-redux";
import { login } from "../../actions/auth";

import { useState } from 'react'

import AuthService from '../../services/auth.service'

const Login = props => {

    const { 
        dispatch, 
        history,
        isLoggedIn,
        message,
        host,
        port 
    } = props;

    const [values, setValues] = useState({
        showPassword: false,
        needRemember:true,
        loading:false        
    });

    const setLoading = payload => {
        setValues({
            ...values,
            loading: payload
          });
    }

    const toggleNeedRemember = () => {
        setValues({
            ...values,
            needRemember: !values.needRemember,
          });
    }

    const toggleShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
          });
    }
    
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
        const service = new AuthService(host, port)
        dispatch(login(service, email, password))
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
        loading={values.loading}
        needRemember={values.needRemember}
        showPassword={values.showPassword}
        toggleShowPassword={toggleShowPassword}
        toggleNeedRemember={toggleNeedRemember}
    />
}

const mapStateToProps = state => {
    const { isLoggedIn } = state.auth
    const { message } = state.message
    const { host, port } = state.connect
    return {
      isLoggedIn,
      message,
      host, 
      port
    };
  }

export default connect(mapStateToProps)(Login)

LoginForm.propTypes = {
    isLoggedIn:PropTypes.bool,
    message:PropTypes.string,
    dispatch:PropTypes.func,
    history:PropTypes.array
}