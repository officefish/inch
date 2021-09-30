import LoginForm from '../../ui/inch/form/LoginForm'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { connect } from "react-redux";
import { login } from "../../actions/auth";

import { useState } from 'react'

const locale = {
    emailRequired:"Email is required",
    emailInvalid:"Email is invalid",
    passRequired:"Password is required",
    passMin:"Password must be at least 6 characters",
    passMax:"Password must not exceed 40 characters"
}

const Login = props => {

    const { dispatch, history } = props;

    const [loading, setLoading] = useState(false)
    
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required(locale.emailRequired)
            .email(locale.emailInvalid),
        password: Yup.string()
            .required(locale.passRequired)
            .min(6, locale.passMin)
            .max(40, locale.passMax)
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
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

    return <LoginForm
        register={register}
        errors={errors}
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